import Link from 'next/link';
import { type Categories } from '@prisma/client';
import { playfairDisplay } from '@/app/fonts';

export default function HomeCategories({
  categories,
  // We are appending title to the categories string but also each category name.
  title,
}: {
  categories: Categories[];
  title: string;
}) {
  return (
    <section className="my-12">
      <h2
        className={`${playfairDisplay.className} mb-3 text-center text-3xl md:text-4xl`}
      >
        {title} categories
      </h2>
      <ul className="mx-5 flex list-none flex-col flex-wrap md:flex-row md:justify-center">
        {categories.map((category) => (
          // TODO: Update href link to the correct path.
          <Link key={category.id} href={`/`}>
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
