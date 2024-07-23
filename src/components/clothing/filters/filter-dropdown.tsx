'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface FilterDropdownProps {
  isOpen: boolean;
  items: string[];
  selectedItems: string[];
  filterType: 'color' | 'size';
}

export default function FilterDropdown({
  isOpen,
  items,
  selectedItems,
  filterType,
}: FilterDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  function createURL(filterType: 'color' | 'size', value?: string) {
    const search = new URLSearchParams(searchParams);

    if (value) {
      const normalizedValue = value.toLowerCase();

      if (search.has(filterType, normalizedValue)) {
        search.delete(filterType, normalizedValue);
      } else {
        search.append(filterType, normalizedValue);
      }
    }

    setLoading(true);

    return `${pathname}?${search.toString()}`;
  }

  return (
    <div className="mt-4">
      {loading && <div className="mb-2">Loading...</div>}
      {isOpen &&
        items.map((item) => (
          <div key={item} className="flex items-center">
            <input
              className="cursor-pointer"
              type="checkbox"
              id={item}
              checked={selectedItems.includes(item.toLowerCase())}
              onChange={() => router.push(createURL(filterType, item))}
            />
            <label htmlFor={item} className="ml-2 cursor-pointer">
              {item}
            </label>
          </div>
        ))}
    </div>
  );
}
