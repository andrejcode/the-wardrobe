import Button from '@/components/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-3 text-center text-3xl md:text-4xl">404 Not Found</h2>
      <p className="text-center text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4">
        <Button>Return Home</Button>
      </Link>
    </section>
  );
}
