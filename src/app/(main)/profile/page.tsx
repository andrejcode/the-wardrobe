import { auth } from '@/auth';
import { PaymentDetails } from '@/lib/definitions';
import stripe from '@/lib/stripe';
import getCustomer from '@/lib/stripe/get-customer';
import Stripe from 'stripe';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function ProfilePage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  const email = session.user.email ?? '';

  const customerId = await getCustomer(email);

  const paymentIntents = await stripe.paymentIntents.list({
    customer: customerId,
  });

  const detailedPayments: PaymentDetails[] = await Promise.all(
    paymentIntents.data.map(async (paymentIntent: Stripe.PaymentIntent) => {
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
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-left">
                <th className="border-b border-gray-200 px-4 py-2">Date</th>
                <th className="border-b border-gray-200 px-4 py-2">Amount</th>
                <th className="border-b border-gray-200 px-4 py-2">Status</th>
                <th className="border-b border-gray-200 px-4 py-2">Items</th>
              </tr>
            </thead>
            <tbody>
              {detailedPayments.map((payment, index) => (
                <tr
                  key={payment.paymentIntent.id}
                  className={index % 2 === 0 ? 'bg-gray-100' : ''}
                >
                  <td className="border-b border-gray-200 px-4 py-2">
                    {new Date(
                      payment.paymentIntent.created * 1000
                    ).toLocaleDateString()}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    {payment.paymentIntent.amount / 100}&euro;
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    {payment.paymentIntent.status}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    <ul className="ml-4 list-disc">
                      {payment.lineItems.map((item) => (
                        <li key={item.id}>
                          {item.description} - {item.amount_total / 100}{' '}
                          {item.currency.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
