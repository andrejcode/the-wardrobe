'use client';

import Button from '@/components/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-2 text-lg">Something went wrong!</h2>
      <Link href="/">
        <Button rounded>Return Home</Button>
      </Link>
    </div>
  );
}
