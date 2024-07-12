import ClothingItem from './clothing-item';
import { playfairDisplay } from '@/app/fonts';
import { fetchClothing, fetchClothingCount } from '@/lib/data';
import { getGenderForSection } from '@/lib/utils';
import { CLOTHING_ITEMS_PER_PAGE } from '@/lib/constants';
import Pagination from './pagination';

interface ClothingProps {
  title: string;
  section: string;
  page: number;
}

export default async function Clothing({
  title,
  section,
  page,
}: ClothingProps) {
  const gender = getGenderForSection(section);
  const clothing = await fetchClothing(
    gender,
    (page - 1) * CLOTHING_ITEMS_PER_PAGE,
    CLOTHING_ITEMS_PER_PAGE
  );

  const clothingCount = await fetchClothingCount(gender);

  return (
    <div className="flex flex-col">
      <h1
        className={`${playfairDisplay.className} mx-4 mt-4 text-center text-xl font-bold md:text-left md:text-3xl`}
      >
        {title}
      </h1>

      <div className="flex min-h-screen flex-col flex-wrap items-center md:flex-row md:items-start">
        {clothing.length === 0 ? (
          <div className="m-4 text-lg">There are no clothing yet.</div>
        ) : (
          clothing.map((clothingItem) => (
            <ClothingItem key={clothingItem.id} clothingItem={clothingItem} />
          ))
        )}
      </div>

      <Pagination itemCount={clothingCount} />
    </div>
  );
}
