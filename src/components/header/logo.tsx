import Link from 'next/link';
import { playfairDisplay } from '@/app/fonts';

export default function Logo() {
  return (
    <Link href="/">
      <div
        className={`${playfairDisplay.className} whitespace-nowrap py-4 text-xl font-bold md:text-2xl`}
      >
        The Wardrobe
      </div>
    </Link>
  );
}
