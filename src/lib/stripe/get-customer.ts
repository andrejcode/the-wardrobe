import Stripe from 'stripe';
import stripe from '.';

export default async function getCustomer(
  email: string
): Promise<Stripe.Customer['id']> {
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

  return customer.id;
}
