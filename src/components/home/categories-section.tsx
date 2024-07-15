import HomeCategories from './home-categories';
import { fetchCategories } from '@/lib/data';
import { Gender } from '@prisma/client';

export default async function CategoriesSection() {
  const categories = await fetchCategories();

  const femaleCategories = categories.filter(
    // We are not checking for gender === Gender.FEMALE
    // because we also have UNISEX categories.
    // Same goes for male categories.
    (category) => category.gender !== Gender.MALE
  );
  const maleCategories = categories.filter(
    (category) => category.gender !== Gender.FEMALE
  );

  return (
    <section>
      <HomeCategories categories={femaleCategories} categoryFor="women" />
      <HomeCategories categories={maleCategories} categoryFor="men" />
    </section>
  );
}
