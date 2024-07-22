import Clothing from '@/components/clothing';
import ClothingSkeleton from '@/components/clothing/clothing-skeleton';
import Filters from '@/components/clothing/filters';
import { SECTIONS } from '@/lib/constants';
import { getCategoryNameFromParam } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default function SubcategoryPage({
  params,
  searchParams,
}: {
  params: { section: string; category: string; subcategory: string };
  searchParams?: {
    page?: string;
    color?: string | string[];
    size?: string | string[];
  };
}) {
  const { section, category, subcategory } = params;

  if (!SECTIONS.includes(section)) {
    notFound();
  }

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const categoryName = getCategoryNameFromParam(category);
  const subcategoryName = getCategoryNameFromParam(subcategory);
  const colors: string | string[] = searchParams?.color
    ? searchParams.color
    : [];
  const sizes: string | string[] = searchParams?.size ? searchParams.size : [];

  return (
    <section className="flex flex-col">
      <Suspense>
        <Filters />
      </Suspense>
      <Suspense fallback={<ClothingSkeleton />}>
        <Clothing
          title={`${subcategoryName} for ${section}`}
          section={section}
          category={categoryName}
          subcategory={subcategoryName}
          page={page}
          colors={colors}
          sizes={sizes}
        />
      </Suspense>
    </section>
  );
}
