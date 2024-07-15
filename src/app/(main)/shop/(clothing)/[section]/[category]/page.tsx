import Clothing from '@/components/clothing';
import ClothingSkeleton from '@/components/clothing/clothing-skeleton';
import { SECTIONS } from '@/lib/constants';
import { getCategoryNameFromParam } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { section: string; category: string };
  searchParams?: {
    page?: string;
    color?: string | string[];
    size?: string | string[];
  };
}) {
  const { section, category } = params;

  if (!SECTIONS.includes(section)) {
    notFound();
  }

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const categoryName = getCategoryNameFromParam(category);
  const colors: string | string[] = searchParams?.color
    ? searchParams.color
    : [];
  const sizes: string | string[] = searchParams?.size ? searchParams.size : [];

  return (
    <Suspense fallback={<ClothingSkeleton />}>
      <Clothing
        title={`${categoryName} for ${section}`}
        section={section}
        category={categoryName}
        page={page}
        colors={colors}
        sizes={sizes}
      />
    </Suspense>
  );
}
