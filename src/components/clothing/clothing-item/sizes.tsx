import { ClothingItemWithVariationsAndInventory } from '@/lib/definitions';
import { getUniqueSizes } from '@/lib/utils';

interface SizesProps {
  clothingItem: ClothingItemWithVariationsAndInventory;
}

export default function Sizes({ clothingItem }: SizesProps) {
  return (
    <p>
      <span className="font-bold">Available in: </span>
      {getUniqueSizes(clothingItem).join(', ')}
    </p>
  );
}
