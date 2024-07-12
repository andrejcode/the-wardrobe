import { ClothingWithVariationsAndInventory } from '@/lib/definitions';

export function findSmallestPriceInCents(
  clothingItem: ClothingWithVariationsAndInventory
) {
  let smallestPrice =
    clothingItem.clothingVariations[0].inventory[0].priceInCents ?? 10000;

  clothingItem.clothingVariations.forEach((variation) => {
    variation.inventory.forEach((item) => {
      if (item.priceInCents < smallestPrice) {
        smallestPrice = item.priceInCents;
      }
    });
  });

  return smallestPrice / 100; // Maybe add toFixed(2) here.
}

export default function SmallestPrice({
  clothingItem,
}: {
  clothingItem: ClothingWithVariationsAndInventory;
}) {
  return (
    <p className="mt-2 text-lg font-bold">
      <span className="font-normal">From </span>
      {findSmallestPriceInCents(clothingItem)}&euro;
    </p>
  );
}
