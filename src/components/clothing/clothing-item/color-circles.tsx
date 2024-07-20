import { ClothingVariations, Color } from '@prisma/client';
import clsx from 'clsx';

export default function ColorCircles({
  activeColor,
  variations,
  changeColor,
}: {
  activeColor: Color;
  variations: ClothingVariations[];
  changeColor: (color: Color) => void;
}) {
  return (
    <div className="my-2 flex items-center space-x-2">
      {variations.map((variation) => (
        <div
          key={variation.id}
          className={clsx('flex items-center rounded-full border-2 p-1', {
            'border-black': variation.color === activeColor,
          })}
        >
          <button
            onClick={(event) => {
              event.preventDefault();
              changeColor(variation.color);
            }}
            className={clsx(
              'h-6 w-6 cursor-pointer rounded-full border border-black'
            )}
            style={{ backgroundColor: variation.color }}
          ></button>
        </div>
      ))}
    </div>
  );
}
