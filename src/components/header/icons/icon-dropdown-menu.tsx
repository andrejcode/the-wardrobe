'use client';

import MobileModal from '@/components/mobile-modal';
import useMobileModal from '@/hooks/useMobileModal';
import { useEffect, useRef, useState } from 'react';
import { IoPersonOutline, IoBagOutline } from 'react-icons/io5';

export default function IconDropdownMenu({
  iconName,
  iconTitle,
  children,
}: {
  iconName: 'IoPersonOutline' | 'IoBagOutline';
  iconTitle: string;
  children: React.ReactNode;
}) {
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
        closeModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  function toggleDropdown() {
    setIsShown((prev) => !prev);
  }

  return (
    <>
      <Icon
        className="cursor-pointer"
        size={24}
        title={iconTitle}
        onClick={() => {
          toggleDropdown();
          openModal();
        }}
      />

      {isShown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-14 z-50 m-4 hidden min-w-40 border border-solid border-black bg-white p-4 text-black md:flex md:flex-col"
        >
          {children}
        </div>
      )}

      {isOpen && <MobileModal closeModal={closeModal}>{children}</MobileModal>}
    </>
  );
}
