import Clothing from '@/components/clothing';
import ClothingSkeleton from '@/components/clothing/clothing-skeleton';
import { Suspense } from 'react';

interface SearchPageProps {
  searchParams?: {
    q?: string;
    page?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams?.q;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  return query ? (
    <Suspense fallback={<ClothingSkeleton />}>
      <Clothing
        title={`Search results for "${query}"`}
        page={page}
        clothingItemName={query}
      />
    </Suspense>
  ) : (
    <p className="m-4 text-center text-lg md:text-left md:text-xl">
      Please enter a search query
    </p>
  );
}
