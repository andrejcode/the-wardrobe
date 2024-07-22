import { Hero, CategoriesSection } from '@/components/home/';
import { Suspense } from 'react';
import * as fal from '@fal-ai/serverless-client';

fal.config({
  proxyUrl: '/api/fal/proxy',
});

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
