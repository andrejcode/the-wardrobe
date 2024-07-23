'use client';

import { ClothingVariation, Color } from '@prisma/client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import ColorCircles from '../clothing/clothing-item/color-circles';
import { useState } from 'react';

interface ColorCirclesParamsProps {
  variations: ClothingVariation[];
}

export default function ColorCirclesParams({
  variations,
}: ColorCirclesParamsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeColor, setActiveColor] = useState<Color>(() => {
    const color = searchParams.get('color');
    if (color) {
      return color.toUpperCase() as Color;
    }
    return variations[0].color;
  });

  function handleChangeVariation(color: Color) {
    setActiveColor(color);

    const search = new URLSearchParams(searchParams);
    search.set('color', color.toLowerCase());
    router.push(`${pathname}?${search.toString()}`);
  }

  return (
    <ColorCircles
      activeColor={activeColor}
      variations={variations}
      changeColor={handleChangeVariation}
    />
  );
}
