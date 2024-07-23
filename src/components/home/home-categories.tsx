import Link from 'next/link';
import { type Category } from '@prisma/client';
import { playfairDisplay } from '@/app/fonts';
import { getParamFromCategoryName } from '@/lib/utils';

interface HomeCategoriesProps {
  categories: Category[];
  categoryFor: 'women' | 'men';
}

export default function HomeCategories({
  categories,
  // We are appending title to the categories string but also each category name.
  categoryFor,
}: HomeCategoriesProps) {
  const title = `${categoryFor.charAt(0).toUpperCase()}${categoryFor.slice(1)}'s`;

  return (
    <section className="my-12">
      <h2
        className={`${playfairDisplay.className} mb-3 text-center text-3xl md:text-4xl`}
      >
        {title} categories
      </h2>
      <ul className="mx-5 flex list-none flex-col flex-wrap md:flex-row md:justify-center">
        {categories.map((category) => (
          <li
            key={category.id}
            className="py-2 text-center hover:text-gray-600 md:p-4 md:text-lg"
          >
            <Link
              href={`shop/${categoryFor}/${getParamFromCategoryName(category.name)}`}
            >
              {title} {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
