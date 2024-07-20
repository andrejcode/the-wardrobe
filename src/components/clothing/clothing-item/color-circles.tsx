'use client';

import { ClothingVariations, Color } from '@prisma/client';
import clsx from 'clsx';
import { useState } from 'react';

export default function ColorCircles({
  variations,
  changeVariationIndex,
  changeVariation,
}: {
  variations: ClothingVariations[];
  changeVariationIndex?: (index: number) => void;
  changeVariation?: (color: Color) => void;
}) {
  const [activeColor, setActiveColor] = useState(0);

  return (
    <div className="my-2 flex items-center space-x-2">
      {variations.map((variation, index) => (
        <div
          key={variation.id}
          className={clsx('flex items-center rounded-full border-2 p-1', {
            'border-black': index === activeColor,
          })}
        >
          <button
            onClick={(event) => {
              event.preventDefault();
              setActiveColor(index);
              if (changeVariationIndex) {
                changeVariationIndex(index);
              }
              if (changeVariation) {
                changeVariation(variation.color);
              }
            }}
            className={clsx(
              'h-6 w-6 cursor-pointer rounded-full border border-black'
            )}
            style={{ backgroundColor: variation.color }}
          ></button>
        </div>
      ))}
    </div>
  );
}
