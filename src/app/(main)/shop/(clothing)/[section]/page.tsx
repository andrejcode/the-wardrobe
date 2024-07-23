import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Clothing from '@/components/clothing';
import ClothingSkeleton from '@/components/clothing/clothing-skeleton';
import { SECTIONS } from '@/lib/constants';
import Filters from '@/components/clothing/filters';

interface SectionPageProps {
  params: { section: string };
  searchParams?: {
    page?: string;
    color?: string | string[];
    size?: string | string[];
  };
}

export default async function SectionPage({
  params,
  searchParams,
}: SectionPageProps) {
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
    <section className="flex flex-col">
      <Suspense>
        <Filters />
      </Suspense>
      <Suspense fallback={<ClothingSkeleton />}>
        <Clothing
          title={`Clothing for ${section}`}
          section={section}
          page={page}
          colors={colors}
          sizes={sizes}
        />
      </Suspense>
    </section>
  );
}
