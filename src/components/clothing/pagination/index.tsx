'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { calculatePages } from '@/lib/utils';
import PaginationArrow from './pagination-arrow';

export default function Pagination({ itemCount }: { itemCount: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const totalPages = calculatePages(itemCount);

  function createPageURL(page: number | string) {
    const search = new URLSearchParams(searchParams);
    search.set('page', page.toString());
    return `${pathname}?${search.toString()}`;
  }

  return (
    <div className="m-2 flex items-center self-center md:self-start">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <p className="mx-2 text-lg">
        Page {currentPage} of {totalPages}
      </p>
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}
