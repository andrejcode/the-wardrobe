'use client';

import Button from '@/components/button';
import IconDropdownMenu from './icon-dropdown-menu';
import Image from 'next/image';
import { useBagStore } from '@/providers/bag-store-provider';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Session } from 'next-auth';

export default function BagIcon({ session }: { session: Session | null }) {
  const { bag, removeFromBag } = useBagStore((state) => state);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!session || !session.user) {
      router.push('/signin');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout_sessions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bag),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      router.push(url);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Suspense>
      <IconDropdownMenu iconName="IoBagOutline" iconTitle="Bag">
        <>
          {bag.length === 0 ? (
            <p className="text-center">Bag is empty</p>
          ) : (
            <div className="mx-4 md:mx-0">
              <form onSubmit={handleSubmit}>
                <Button
                  type="submit"
                  role="link"
                  isDisabled={isLoading}
                  fullWidth
                >
                  {isLoading ? 'Loading...' : 'Go to checkout'}
                </Button>
              </form>
              <ul className="mx-4 mt-4 md:mx-0">
                {bag.map((item) => (
                  <li
                    key={item.id}
                    className="mb-4 flex items-center justify-between"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={100}
                      height={200}
                    />
                    <div className="flex flex-col">
                      <p>Color: {item.color}</p>
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: {item.priceInCents / 100}&euro;</p>
                    </div>

                    <Button onClick={() => removeFromBag(item.id)}>
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      </IconDropdownMenu>
    </Suspense>
  );
}
