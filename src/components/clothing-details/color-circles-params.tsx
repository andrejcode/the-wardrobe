'use client';

import { ClothingVariations, Color } from '@prisma/client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import ColorCircles from '../clothing/clothing-item/color-circles';

export default function ColorCirclesParams({
  variations,
}: {
  variations: ClothingVariations[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleChangeVariation(color: Color) {
    const search = new URLSearchParams(searchParams);
    search.set('color', color.toLowerCase());
    router.push(`${pathname}?${search.toString()}`);
  }

  return (
    <ColorCircles
      variations={variations}
      changeVariation={handleChangeVariation}
    />
  );
}
