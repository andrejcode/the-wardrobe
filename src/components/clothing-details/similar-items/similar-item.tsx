import Image from 'next/image';
import Link from 'next/link';

export default function SimilarItem({
  itemId,
  imageUrl,
  title,
}: {
  itemId: number;
  imageUrl: string;
  title: string;
}) {
  return (
    <Link href={`/shop/clothing-item/${itemId}`}>
      <div className="my-4 flex cursor-pointer flex-col items-center border border-black shadow-lg md:mr-4">
        <div className="relative h-80 w-80">
          <Image
            src={imageUrl}
            alt={title}
            priority={true}
            fill={true}
            sizes="100%"
            quality={50}
            className="object-contain"
          />
        </div>
        <p className="my-2 text-sm text-black">{title}</p>
      </div>
    </Link>
  );
}
