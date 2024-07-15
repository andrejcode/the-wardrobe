'use client';

import { useState } from 'react';
import DropdownButton from '../dropdown-button';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Color, Size } from '@prisma/client';

export default function Filters() {
  const [colorDropdownIsOpen, setColorDropdownIsOpen] = useState(false);
  const [sizeDropdownIsOpen, setSizeDropdownIsOpen] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const colors = searchParams.getAll('color');
  const sizes = searchParams.getAll('size');

  function createURL(color?: string, size?: string) {
    const search = new URLSearchParams(searchParams);

    if (color) {
      const normalizedColor = color.toLowerCase();

      if (search.has('color', normalizedColor)) {
        search.delete('color', normalizedColor);
      } else {
        search.append('color', normalizedColor);
      }
    }

    if (size) {
      const normalizedSize = size.toLowerCase();

      if (search.has('size', normalizedSize)) {
        search.delete('size', normalizedSize);
      } else {
        search.append('size', normalizedSize);
      }
    }

    return `${pathname}?${search.toString()}`;
  }

  function toggleColorDropdown() {
    setColorDropdownIsOpen((prev) => !prev);
    setSizeDropdownIsOpen(false);
  }

  function toggleSizeDropdown() {
    setSizeDropdownIsOpen((prev) => !prev);
    setColorDropdownIsOpen(false);
  }

  const colorNames = Object.keys(Color);
  const sizeNames = Object.keys(Size);

  const ColorFilter = (
    <div className="mt-4">
      {colorNames.map((color) => (
        <div key={color} className="flex items-center">
          <input
            className="cursor-pointer"
            type="checkbox"
            id={color}
            checked={colors.includes(color.toLowerCase())}
            onChange={() => router.push(createURL(color))}
          />
          <label htmlFor={color} className="ml-2 cursor-pointer">
            {color}
          </label>
        </div>
      ))}
    </div>
  );

  const SizeFilter = (
    <div className="mt-4">
      {sizeNames.map((size) => (
        <div key={size} className="flex items-center">
          <input
            className="cursor-pointer"
            type="checkbox"
            id={size}
            checked={sizes.includes(size.toLowerCase())}
            onChange={() => router.push(createURL(undefined, size))}
          />
          <label htmlFor={size} className="ml-2 cursor-pointer">
            {size}
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-4 mt-5">
      <div className="flex">
        <DropdownButton
          isOpen={colorDropdownIsOpen}
          onClick={toggleColorDropdown}
        >
          Color
        </DropdownButton>
        <div className="mr-2"></div>
        <DropdownButton
          isOpen={sizeDropdownIsOpen}
          onClick={toggleSizeDropdown}
        >
          Size
        </DropdownButton>
      </div>

      {colorDropdownIsOpen && ColorFilter}
      {sizeDropdownIsOpen && SizeFilter}
    </div>
  );
}
