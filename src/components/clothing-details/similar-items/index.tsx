import { fetchSimilarClothingItems } from '@/lib/data';
import SimilarItem from './similar-item';

export default async function SimilarItems({ id }: { id: number }) {
  const similarItems = await fetchSimilarClothingItems(id);

  if (!similarItems || similarItems.length === 0) {
    return <p className="mt-2">No clothing items found.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      {similarItems.map((item) => (
        <SimilarItem
          key={item.id}
          itemId={item.id}
          title={item.name}
          imageUrl={item.clothingVariations[0].imageUrl}
        />
      ))}
    </div>
  );
}
