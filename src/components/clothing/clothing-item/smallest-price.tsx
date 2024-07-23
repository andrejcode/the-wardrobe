import { ClothingItemWithVariationsAndInventory } from '@/lib/definitions';
import { findSmallestPriceInCents } from '@/lib/utils';

interface SmallestPriceProps {
  clothingItem: ClothingItemWithVariationsAndInventory;
}

export default function SmallestPrice({ clothingItem }: SmallestPriceProps) {
  return (
    <p className="mt-2 text-lg font-bold">
      <span className="font-normal">From </span>
      {findSmallestPriceInCents(clothingItem)}&euro;
    </p>
  );
}
