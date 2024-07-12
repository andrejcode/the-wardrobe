import { ClothingWithVariationsAndInventory } from '@/lib/definitions';

// Return an array of unique sizes for a given clothing item.
export function getSizes(clothingItem: ClothingWithVariationsAndInventory) {
  const sizes: string[] = [];

  clothingItem.clothingVariations.forEach((variation) => {
    variation.inventory.forEach((item) => {
      if (!sizes.includes(item.size)) {
        sizes.push(item.size);
      }
    });
  });

  return sizes;
}

export default function Sizes({
  clothingItem,
}: {
  clothingItem: ClothingWithVariationsAndInventory;
}) {
  return (
    <p>
      <span className="font-bold">Available in: </span>
      {getSizes(clothingItem).join(', ')}
    </p>
  );
}
