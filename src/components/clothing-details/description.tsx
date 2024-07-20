'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';

export default function Description({ description }: { description: string }) {
  const [isShown, setIsShown] = useState(false);

  function toggleDescription() {
    setIsShown((prev) => !prev);
  }

  return (
    <div className="my-4 flex min-w-full flex-col">
      <div className="mb-1">
        <button onClick={toggleDescription} className="flex items-center">
          {isShown ? 'Hide' : 'Show'} description
          <div className="ml-1">
            {isShown ? (
              <IoCaretUpOutline size={24} title="Hide" />
            ) : (
              <IoCaretDownOutline size={24} title="Show" />
            )}
          </div>
        </button>
      </div>
      {isShown && <hr className="bg-lightGray" />}
      <p
        className={clsx('text-justify', {
          // prettier-ignore
          'invisible': !isShown,
          // prettier-ignore
          'visible': isShown,
        })}
      >
        {description}
      </p>
    </div>
  );
}
