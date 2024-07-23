'use client';

import { useState } from 'react';
import DropdownButton from '@/components/dropdown-button';
import { useSearchParams } from 'next/navigation';
import { Color, Size } from '@prisma/client';
import FilterDropdown from './filter-dropdown';

export default function Filters() {
  const [colorDropdownIsOpen, setColorDropdownIsOpen] = useState(false);
  const [sizeDropdownIsOpen, setSizeDropdownIsOpen] = useState(false);

  const searchParams = useSearchParams();

  const colors = searchParams.getAll('color');
  const sizes = searchParams.getAll('size');

  function toggleDropdown(
    setDropdownState: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    setDropdownState((prev) => !prev);
  }

  return (
    <div className="mx-4 mt-5">
      <div className="flex">
        <DropdownButton
          isOpen={colorDropdownIsOpen}
          onClick={() => {
            toggleDropdown(setColorDropdownIsOpen);
            setSizeDropdownIsOpen(false);
          }}
        >
          Color
        </DropdownButton>
        <div className="mr-2"></div>
        <DropdownButton
          isOpen={sizeDropdownIsOpen}
          onClick={() => {
            toggleDropdown(setSizeDropdownIsOpen);
            setColorDropdownIsOpen(false);
          }}
        >
          Size
        </DropdownButton>
      </div>

      <FilterDropdown
        isOpen={colorDropdownIsOpen}
        items={Object.keys(Color)}
        selectedItems={colors}
        filterType="color"
      />
      <FilterDropdown
        isOpen={sizeDropdownIsOpen}
        items={Object.keys(Size)}
        selectedItems={sizes}
        filterType="size"
      />
    </div>
  );
}
