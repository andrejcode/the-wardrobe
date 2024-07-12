import { ClothingVariations } from '@prisma/client';

export default function ColorCircles({
  variations,
  changeVariationIndex,
}: {
  variations: ClothingVariations[];
  changeVariationIndex: (index: number) => void;
}) {
  return (
    <div className="my-2 flex space-x-2">
      {variations.map((variation, index) => (
        <div
          key={variation.id}
          onClick={(event) => {
            event.preventDefault();
            changeVariationIndex(index);
          }}
          className="h-6 w-6 cursor-pointer rounded-full border border-black"
          style={{
            backgroundColor: variation.color,
          }}
        ></div>
      ))}
    </div>
  );
}
