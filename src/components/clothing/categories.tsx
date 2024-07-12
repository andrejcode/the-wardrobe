import Link from 'next/link';
import { CategoriesWithSubcategories } from '@/lib/definitions';

export default function Categories({
  categories,
}: {
  categories: CategoriesWithSubcategories[];
}) {
  return (
    <div className="px-7 py-2 md:px-4">
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mt-2 list-none font-bold md:text-lg">
            <Link href="/">{category.name}</Link>

            {category.subcategories && (
              <ul className="ml-4 mt-1">
                {category.subcategories.map((subcategory) => (
                  <li
                    className="mt-1 list-none text-sm font-normal md:text-base"
                    key={subcategory.id}
                  >
                    <Link href="/">{subcategory.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
