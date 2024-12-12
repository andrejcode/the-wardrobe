'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Sizes from './sizes';
import ColorCircles from './color-circles';
import SmallestPrice from './smallest-price';
import { ClothingItemWithVariationsAndInventory } from '@/lib/definitions';
import { Color } from '@prisma/client';
import placeholderImage from '@/assets/placeholder-image.jpg';

interface ClothingItemProps {
  clothingItem: ClothingItemWithVariationsAndInventory;
}

export default function ClothingItem({ clothingItem }: ClothingItemProps) {
  const [activeColor, setActiveColor] = useState<Color>(
    clothingItem.clothingVariations[0].color
  );
  const [imageUrl, setImageUrl] = useState<string | StaticImageData>(
    clothingItem.clothingVariations[0].imageUrl
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setImageUrl(
      clothingItem.clothingVariations.find(
        (variation) => variation.color === activeColor
      )?.imageUrl ?? placeholderImage
    );
  }, [activeColor, clothingItem.clothingVariations]);

  function changeColor(color: Color) {
    setActiveColor(color);
  }

  return (
    <Link href={`/shop/clothing-item/${clothingItem.id}`}>
      <div className="mb-4 flex h-[500px] w-full cursor-pointer flex-col rounded-lg bg-white p-4 shadow-lg md:m-4 md:max-w-80">
        <div className="relative h-80 w-80 self-center">
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50 z-50">
              <p>Loading...</p>
            </div>
          )}
          <Image
            src={imageUrl}
            alt={clothingItem.name}
            fill={true}
            priority={true}
            sizes="100%"
            quality={50}
            className="object-contain"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <h2 className="mt-4 font-bold md:text-lg">{clothingItem.name}</h2>
        <ColorCircles
          activeColor={activeColor}
          changeColor={changeColor}
          variations={clothingItem.clothingVariations}
        />
        <Sizes clothingItem={clothingItem} />
        <SmallestPrice clothingItem={clothingItem} />
      </div>
    </Link>
  );
}
