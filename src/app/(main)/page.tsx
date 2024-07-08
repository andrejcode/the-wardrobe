import prisma from '@/lib/prisma';
import { Gender } from '@prisma/client';

export default async function Page() {
  const categories = await prisma.categories.findMany({
    include: {
      subcategories: true,
    },
  });

  const femaleCategories = categories.filter(
    (category) => category.gender !== Gender.MALE
  );
  const maleCategories = categories.filter(
    (category) => category.gender !== Gender.FEMALE
  );

  return (
    <main>
      <h2>Women&apos;s categories</h2>
      <ul>
        {femaleCategories.map((category) => (
          <li key={category.id}>Women&apos;s {category.name}</li>
        ))}
      </ul>

      <h2>Men&apos;s categories</h2>
      <ul>
        {maleCategories.map((category) => (
          <li key={category.id}>Men&apos;s {category.name}</li>
        ))}
      </ul>
    </main>
  );
}
