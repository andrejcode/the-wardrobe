'use client';

import Link from 'next/link';
import { CategoryWithSubcategories } from '@/lib/definitions';
import { getParamFromCategoryName } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { Gender } from '@prisma/client';

interface CategoriesProps {
  categories: CategoryWithSubcategories[];
}

export default function Categories({ categories }: CategoriesProps) {
  const params = useParams<{ section: string }>();

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
              href={`/shop/${params.section ?? 'all'}/${getParamFromCategoryName(category.name)}`}
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
                      href={`/shop/${params.section ?? 'all'}/${getParamFromCategoryName(category.name)}/${getParamFromCategoryName(subcategory.name)}`}
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
