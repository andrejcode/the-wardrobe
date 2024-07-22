'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function Search({ placeholder }: { placeholder: string }) {
  const [term, setTerm] = useState('');

  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set('q', term);
        replace(`/shop/search?${params.toString()}`);
      }
    }
  }

  return (
    <Suspense>
      <div className="relative mx-4">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="block w-full rounded-md py-2 pl-10 text-sm text-black placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(event) => setTerm(event.target.value)}
          defaultValue={searchParams.get('q')?.toString()}
          onKeyDown={handleSearch}
        />
        <IoIosSearch
          size={24}
          color="gray"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
      </div>
    </Suspense>
  );
}
