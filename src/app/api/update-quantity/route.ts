import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';
import { BagItem } from '@/lib/definitions';
import prisma from '@/lib/prisma';
import { Color, Size } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const sessionFound = await prisma.stripeSession.findUnique({
      where: {
        sessionId,
      },
    });

    if (sessionFound) {
      return NextResponse.json(
        { error: 'Session already processed' },
        { status: 400 }
      );
    } else {
      await prisma.stripeSession.create({
        data: {
          sessionId,
        },
      });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    });

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    const items = JSON.parse(session.metadata!.items) as BagItem[];

    items.forEach(async (item) => {
      const clothingVariation = await prisma.clothingVariation.findFirst({
        where: {
          color: item.color as Color,
          clothingItemId: item.clothingId,
        },
      });

      if (!clothingVariation) {
        throw new Error('Clothing variation not found');
      }

      const inventoryItem = await prisma.inventory.findFirst({
        where: {
          size: item.size as Size,
          clothingVariationId: clothingVariation.id,
        },
      });

      if (!inventoryItem) {
        throw new Error('Inventory item not found');
      }

      const updatedInventoryItem = await prisma.inventory.update({
        where: {
          id: inventoryItem.id,
        },
        data: {
          quantity: {
            decrement: item.quantity,
          },
        },
      });

      console.log('Inventory item updated:', updatedInventoryItem);
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
