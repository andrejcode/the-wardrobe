'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sizes from './sizes';
import ColorCircles from './color-circles';
import SmallestPrice from './smallest-price';
import { ClothingWithVariationsAndInventory } from '@/lib/definitions';

export default function ClothingItem({
  clothingItem,
}: {
  clothingItem: ClothingWithVariationsAndInventory;
}) {
  const [variationIndex, setVariationIndex] = useState(0);

  function changeVariationIndex(index: number) {
    setVariationIndex(index);
  }

  return (
    <Link href={`/shop/clothing-item/${clothingItem.id}`}>
      <div className="m-4 flex h-[500px] max-w-80 cursor-pointer flex-col rounded-lg bg-white p-4 shadow-lg">
        <div className="relative h-80 w-80 self-center">
          <Image
            src={clothingItem.clothingVariations[variationIndex].imageUrl}
            alt={clothingItem.name}
            fill={true}
            priority={true}
            sizes="100%"
            quality={50}
            // style={{ objectFit: 'contain' }}
          />
        </div>

        <h2 className="mt-4 font-bold md:text-lg">{clothingItem.name}</h2>
        <ColorCircles
          changeVariationIndex={changeVariationIndex}
          variations={clothingItem.clothingVariations}
        />
        <Sizes clothingItem={clothingItem} />
        <SmallestPrice clothingItem={clothingItem} />
      </div>
    </Link>
  );
}
