import { Hero, CategoriesSection } from '@/components/home/';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense
        fallback={<p className="my-12 text-center">Loading categories...</p>}
      >
        <CategoriesSection />
      </Suspense>
    </>
  );
}
