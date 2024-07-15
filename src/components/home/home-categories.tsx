import Link from 'next/link';
import { type Categories } from '@prisma/client';
import { playfairDisplay } from '@/app/fonts';
import { getParamFromCategoryName } from '@/lib/utils';

export default function HomeCategories({
  categories,
  // We are appending title to the categories string but also each category name.
  categoryFor,
}: {
  categories: Categories[];
  categoryFor: 'women' | 'men';
}) {
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
          <Link
            key={category.id}
            href={`shop/${categoryFor}/${getParamFromCategoryName(category.name)}`}
          >
            <li
              className="py-2 text-center hover:text-gray-600 md:p-4 md:text-lg"
              key={category.id}
            >
              {title} {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
