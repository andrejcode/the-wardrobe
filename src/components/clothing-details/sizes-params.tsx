'use client';

import { Size } from '@prisma/client';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SizesParamsProps {
  sizes: Size[];
}

export default function SizesParams({ sizes }: SizesParamsProps) {
  const [activeSize, setActiveSize] = useState<Size | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const size = searchParams.get('size') as Size;

    if (size) {
      setActiveSize(size);
    }
  }, [searchParams]);

  function handleClick(size: Size) {
    const search = new URLSearchParams(searchParams);
    search.set('size', size.toLowerCase());
    router.push(`${pathname}?${search.toString()}`);
  }

  return (
    <div className="my-4 flex flex-row flex-wrap">
      {sizes.map((size) => (
        <button
          key={size}
          className={clsx('mr-2 border border-black p-2', {
            'bg-black text-white': size.toLowerCase() === activeSize,
          })}
          onClick={() => handleClick(size as Size)}
        >
          SIZE {size.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
