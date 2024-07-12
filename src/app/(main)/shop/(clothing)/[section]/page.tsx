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
  searchParams?: { page?: string };
}) {
  const section = params.section;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  if (!SECTIONS.includes(section)) {
    notFound();
  }

  return (
    <Suspense fallback={<ClothingSkeleton />}>
      <Clothing
        title={`Clothing for ${section}`}
        section={section}
        page={page}
      />
    </Suspense>
  );
}
