import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = auth(async function GET(req) {
  if (req.auth) {
    const email = req!.auth!.user!.email;
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.role === 'admin') {
      return NextResponse.json({ message: 'Authorized' });
    }
    return NextResponse.json({ message: 'Not authorized' }, { status: 403 });
  }
  return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
});
