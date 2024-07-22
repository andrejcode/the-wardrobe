'use client';

import MobileModal from '@/components/mobile-modal';
import useMobileModal from '@/hooks/useMobileModal';
import { useBagStore } from '@/providers/bag-store-provider';
import { useEffect, useRef, useState } from 'react';
import { IoPersonOutline, IoBagOutline } from 'react-icons/io5';
import clsx from 'clsx';

export default function IconDropdownMenu({
  iconName,
  iconTitle,
  children,
}: {
  iconName: 'IoPersonOutline' | 'IoBagOutline';
  iconTitle: string;
  children: React.ReactNode;
}) {
  const { bag } = useBagStore((state) => state);

  const [isShown, setIsShown] = useState(false);
  const { isOpen, openModal, closeModal } = useMobileModal();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const Icon = iconName === 'IoPersonOutline' ? IoPersonOutline : IoBagOutline;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsShown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setIsShown((prev) => !prev);
  }

  return (
    <>
      <div>
        <Icon
          className={clsx('cursor-pointer', {
            relative: iconName === 'IoBagOutline',
          })}
          size={24}
          title={iconTitle}
          onClick={() => {
            toggleDropdown();
            openModal();
          }}
        />
        {iconName === 'IoBagOutline' && bag.length > 0 && (
          <div className="absolute right-2 top-6 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-black md:top-2">
            {bag.length}
          </div>
        )}
      </div>

      {isShown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-14 z-50 m-4 hidden max-h-[70%] min-w-96 overflow-auto border border-solid border-black bg-white p-4 text-black md:flex md:flex-col"
        >
          {children}
        </div>
      )}

      {isOpen && <MobileModal closeModal={closeModal}>{children}</MobileModal>}
    </>
  );
}
