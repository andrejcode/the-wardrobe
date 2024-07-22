'use client';

import { useBagStore } from '@/providers/bag-store-provider';
import Button from '../button';
import { ClothingWithVariationsAndInventory } from '@/lib/definitions';
import { loadStripe } from '@stripe/stripe-js';
import { Color, Size } from '@prisma/client';
import { useState } from 'react';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string
);

if (!stripePromise) {
  throw new Error(
    'NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY is missing. Please set the environment variable.'
  );
}

export default function AddToBag({
  item,
  priceInCents,
  quantity,
  color,
  size,
  imageUrl,
}: {
  item: ClothingWithVariationsAndInventory;
  priceInCents: number | null;
  quantity: number | null;
  color: Color | undefined;
  size: Size | undefined;
  imageUrl: string | null;
}) {
  const { bag, addToBag, updateQuantity } = useBagStore((state) => state);

  const [error, setError] = useState<string | null>(null);

  function handleAddToBag() {
    if (!priceInCents || !quantity || !color || !size || !imageUrl) {
      setError('Unable to add item to bag. Please try again.');
      return;
    }

    const bagItemFound = bag.find(
      (bagItem) =>
        bagItem.clothingId === item.id &&
        bagItem.name === item.name &&
        bagItem.size === size &&
        bagItem.color === color &&
        bagItem.priceInCents === priceInCents
    );

    if (bagItemFound) {
      if (bagItemFound.quantity < quantity) {
        updateQuantity(bagItemFound.id, bagItemFound.quantity + 1);
      }
      return;
    }

    addToBag({
      id: Date.now(),
      clothingId: item.id,
      name: item.name,
      color: color,
      size: size,
      quantity: 1,
      imageUrl: imageUrl,
      priceInCents: priceInCents,
    });
  }

  return (
    <div className="flex w-full flex-col">
      {error && <p>{error}</p>}
      <Button
        rounded
        fullWidth={true}
        isDisabled={priceInCents === null || quantity === null || quantity <= 0}
        onClick={handleAddToBag}
      >
        Add to bag
      </Button>
    </div>
  );
}
