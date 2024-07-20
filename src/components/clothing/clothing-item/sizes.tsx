import { ClothingWithVariationsAndInventory } from '@/lib/definitions';
import { getUniqueSizes } from '@/lib/utils';

export default function Sizes({
  clothingItem,
}: {
  clothingItem: ClothingWithVariationsAndInventory;
}) {
  return (
    <p>
      <span className="font-bold">Available in: </span>
      {getUniqueSizes(clothingItem).join(', ')}
    </p>
  );
}
