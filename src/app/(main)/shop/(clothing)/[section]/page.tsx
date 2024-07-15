import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Clothing from '@/components/clothing';
import ClothingSkeleton from '@/components/clothing/clothing-skeleton';
import { SECTIONS } from '@/lib/constants';

export default async function SectionPage({
  params,
  searchParams,
}: {
  params: { section: string };
  searchParams?: {
    page?: string;
    color?: string | string[];
    size?: string | string[];
  };
}) {
  const section = params.section;

  if (!SECTIONS.includes(section)) {
    notFound();
  }

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const colors: string | string[] = searchParams?.color
    ? searchParams.color
    : [];
  const sizes: string | string[] = searchParams?.size ? searchParams.size : [];

  return (
    <Suspense fallback={<ClothingSkeleton />}>
      <Clothing
        title={`Clothing for ${section}`}
        section={section}
        page={page}
        colors={colors}
        sizes={sizes}
      />
    </Suspense>
  );
}
