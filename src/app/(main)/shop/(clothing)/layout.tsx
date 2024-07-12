import Categories from '@/components/clothing/categories';
import MobileCategories from '@/components/clothing/mobile-categories';
import { fetchCategories } from '@/lib/data';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();

  return (
    <>
      <div className="min-h-screen md:flex">
        <div className="md:hidden">
          <MobileCategories categories={categories} />
        </div>

        <div className="hidden w-1/5 flex-none border-r border-lightGray md:block">
          <Categories categories={categories} />
        </div>

        {children}
      </div>
    </>
  );
}
