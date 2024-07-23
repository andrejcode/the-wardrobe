import Categories from '@/components/clothing/categories';
import MobileCategories from '@/components/clothing/mobile-categories';
import { fetchCategories } from '@/lib/data';
import { Suspense } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const categories = await fetchCategories();

  return (
    <>
      <div className="min-h-screen md:flex">
        <Suspense>
          <div className="md:hidden">
            <MobileCategories categories={categories} />
          </div>
        </Suspense>

        <div className="hidden w-1/5 flex-none border-r border-lightGray md:block">
          <Categories categories={categories} />
        </div>

        {children}
      </div>
    </>
  );
}
