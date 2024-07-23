import ClothingDetails from '@/components/clothing-details';
import { Color, Size } from '@prisma/client';
import { playfairDisplay } from '@/app/fonts';
import { Suspense } from 'react';
import SimilarItems from '@/components/clothing-details/similar-items';

interface ClothingItemPageProps {
  params: {
    id: string;
  };
  searchParams?: {
    color?: string;
    size?: string;
  };
}

export default function ClothingItemPage({
  params,
  searchParams,
}: ClothingItemPageProps) {
  const id = Number(params.id);

  const color = searchParams?.color?.toUpperCase() as Color;
  const size = searchParams?.size?.toUpperCase() as Size;

  return (
    <>
      <Suspense
        fallback={<p className="m-4 text-lg font-bold">Loading item...</p>}
      >
        <ClothingDetails id={id} color={color} size={size} />
      </Suspense>
      <section className="mx-4 mt-10 text-center md:text-left">
        <h2
          className={`${playfairDisplay.className} text-lg font-bold md:text-xl`}
        >
          Similar items
        </h2>
        <Suspense fallback={<p className="mt-2">Looking for items...</p>}>
          <SimilarItems id={id} />
        </Suspense>
      </section>
    </>
  );
}
