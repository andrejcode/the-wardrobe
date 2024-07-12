import ClothingItemSkeleton from './clothing-item/clothing-item-skeleton';
import { playfairDisplay } from '@/app/fonts';

export default function ClothingSkeleton() {
  return (
    <div className="flex flex-col">
      <h1
        className={`${playfairDisplay.className} mx-4 mt-4 text-center text-xl font-bold md:text-left md:text-3xl`}
      >
        Loading clothing...
      </h1>

      <div className="flex min-h-screen flex-col flex-wrap items-center md:flex-row md:items-start">
        {Array.from({ length: 12 }).map((_, index) => (
          <ClothingItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
