import { auth } from '@/auth';
import { PaymentDetails } from '@/lib/definitions';
import stripe from '@/lib/stripe';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function ProfilePage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/signin');
  }

  console.log(process.env.NEXT_PUBLIC_API_URL);

  const email = session.user.email ?? '';

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

  const customerId = customer.id;

  const paymentIntents = await stripe.paymentIntents.list({
    customer: customerId,
  });

  const detailedPayments: PaymentDetails[] = await Promise.all(
    paymentIntents.data.map(async (paymentIntent) => {
      const charges = await stripe.charges.list({
        payment_intent: paymentIntent.id,
      });

      const session = await stripe.checkout.sessions.list({
        payment_intent: paymentIntent.id,
      });

      const lineItems = session.data.length
        ? await stripe.checkout.sessions.listLineItems(session.data[0].id, {
            limit: 10,
          })
        : { data: [] };

      return {
        paymentIntent,
        charges: charges.data,
        lineItems: lineItems.data,
      };
    })
  );

  return (
    <>
      <div className="mx-4 flex items-center">
        <Image
          src="/clothing/placeholder-image.jpg"
          alt={session.user.name ?? 'User'}
          priority
          width={100}
          height={100}
        />
        <div className="ml-4">
          <h1>{session.user.name ?? 'User'}</h1>
          <p>{session.user.email}</p>
        </div>
      </div>

      <div className="mx-4 mt-4">
        <h2 className="mb-2 text-lg font-bold">Payment History</h2>
        {detailedPayments.length === 0 ? (
          <p>No payments found</p>
        ) : (
          detailedPayments.map((payment) => (
            <div key={payment.paymentIntent.id} className="mb-4">
              <h3>Payment ID: {payment.paymentIntent.id}</h3>
              <p>
                Date:{' '}
                {new Date(
                  payment.paymentIntent.created * 1000
                ).toLocaleDateString()}
              </p>
              <p>Amount: {payment.paymentIntent.amount / 100}&euro;</p>
              <p>Status: {payment.paymentIntent.status}</p>
              <h4>Items:</h4>
              <ul className="ml-4">
                {payment.lineItems.map((item) => (
                  <li key={item.id}>
                    {item.description} - {item.amount_total / 100}{' '}
                    {item.currency.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
}
