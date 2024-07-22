import { auth } from '@/auth';
import { BagItem } from '@/lib/definitions';
import stripe from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    const host = req.headers.get('host');

    if (!host) {
      return NextResponse.json(
        { error: 'Host header is missing' },
        { status: 400 }
      );
    }

    const success_url = `${protocol}://${host}/payment?success=true&session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${protocol}://${host}/payment?canceled=true`;

    const session = await auth();
    const email = session!.user!.email;

    if (!email) {
      throw new Error('Email is required.');
    }

    const clothingItems: BagItem[] = await req.json();
    const lineItems = clothingItems.map((item) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: `Color: ${item.color}, Size: ${item.size}`,
        },
        unit_amount: item.priceInCents,
      },
      quantity: item.quantity,
    }));

    const customers = await stripe.customers.list({
      email,
      limit: 1,
    });
    let customer;

    if (customers.data.length === 0) {
      customer = await stripe.customers.create({
        email,
      });
    } else {
      customer = customers.data[0];
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer: customer.id,
      line_items: lineItems,
      mode: 'payment',
      success_url,
      cancel_url,
      metadata: {
        items: JSON.stringify(clothingItems),
      },
    });

    if (checkoutSession.url) {
      return NextResponse.json({ url: checkoutSession.url }, { status: 200 });
    } else {
      throw new Error('Session URL is null.');
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
