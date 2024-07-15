'use client';

import Link from 'next/link';
import { CategoriesWithSubcategories } from '@/lib/definitions';
import { getParamFromCategoryName } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { Gender } from '@prisma/client';

export default function Categories({
  categories,
}: {
  categories: CategoriesWithSubcategories[];
}) {
  const params = useParams<{ section: string; category: string }>();

  const filteredCategories = categories.filter((category) => {
    switch (params.section) {
      case 'all':
        return true;
      case 'women':
        return category.gender !== Gender.MALE;
      case 'men':
        return category.gender !== Gender.FEMALE;
      default:
        return true;
    }
  });

  return (
    <div className="px-7 py-2 md:px-4">
      <ul>
        {filteredCategories.map((category) => (
          <li
            key={category.id}
            className="mt-2 cursor-pointer list-none font-bold md:text-lg"
          >
            <Link
              href={`/shop/${params.section}/${getParamFromCategoryName(category.name)}`}
            >
              {category.name}
            </Link>

            {category.subcategories && (
              <ul className="ml-4 mt-1">
                {category.subcategories.map((subcategory) => (
                  <li
                    className="mt-1 cursor-pointer list-none text-sm font-normal md:text-base"
                    key={subcategory.id}
                  >
                    <Link
                      href={`/shop/${params.section}/${params.category}/${getParamFromCategoryName(subcategory.name)}`}
                    >
                      {subcategory.name}
                    </Link>
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
