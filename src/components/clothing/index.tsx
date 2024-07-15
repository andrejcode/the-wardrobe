import Pagination from './pagination';
import Filters from './filters';
import ClothingItem from './clothing-item';
import { playfairDisplay } from '@/app/fonts';
import { fetchClothing, fetchClothingCount } from '@/lib/data';
import { getGenderForSection } from '@/lib/utils';
import { CLOTHING_ITEMS_PER_PAGE } from '@/lib/constants';

interface ClothingProps {
  title: string;
  section: string;
  category?: string;
  subcategory?: string;
  page: number;
  colors?: string[] | string;
  sizes?: string[] | string;
}

export default async function Clothing({
  title,
  section,
  category,
  subcategory,
  page,
  colors,
  sizes,
}: ClothingProps) {
  const gender = getGenderForSection(section);

  const clothing = await fetchClothing(
    gender,
    (page - 1) * CLOTHING_ITEMS_PER_PAGE,
    CLOTHING_ITEMS_PER_PAGE,
    category,
    subcategory,
    colors,
    sizes
  );

  const clothingCount = await fetchClothingCount(gender, category, subcategory);

  return (
    <div className="flex flex-col">
      <Filters />

      <h1
        className={`${playfairDisplay.className} mx-4 mt-4 text-center text-xl font-bold md:text-left md:text-3xl`}
      >
        {title}
      </h1>

      <div className="m-4 flex min-h-screen flex-col flex-wrap items-center md:m-0 md:flex-row md:items-start">
        {clothing.length === 0 ? (
          <div className="m-4 text-lg">There are no clothing yet.</div>
        ) : (
          clothing.map((clothingItem) => (
            <ClothingItem key={clothingItem.id} clothingItem={clothingItem} />
          ))
        )}
      </div>

      {clothingCount > 0 && <Pagination itemCount={clothingCount} />}
    </div>
  );
}
