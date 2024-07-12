import Link from 'next/link';
import { playfairDisplay } from '@/app/fonts';

export default function Logo() {
  return (
    <Link href="/">
      <div
        className={`${playfairDisplay.className} py-4 text-lg font-bold md:text-2xl`}
      >
        The Wardrobe
      </div>
    </Link>
  );
}
