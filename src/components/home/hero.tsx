import Image from 'next/image';
import Link from 'next/link';
import { playfairDisplay } from '@/app/fonts';
import Button from '../button';

export default function Hero() {
  return (
    <section className="relative h-[70vh]">
      <Image
        src="/hero-image.jpg"
        alt="Clothes hanging on a rack"
        fill={true}
        style={{ objectFit: 'cover' }}
        quality={50}
        priority={true}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1
          className={`${playfairDisplay.className} text-5xl font-bold text-white md:text-8xl`}
        >
          The Wardrobe
        </h1>
        <h2 className="mt-4 text-2xl text-white md:text-5xl">
          Curate Your Story
        </h2>
        <div className="mt-6">
          <Link href="/shop/women" className="px-2">
            <Button inverse rounded>
              Shop Women&apos;s
            </Button>
          </Link>
          <Link href="/shop/men" className="px-2">
            <Button inverse rounded>
              Shop Men&apos;s
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
