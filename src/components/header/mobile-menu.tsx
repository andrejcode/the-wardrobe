'use client';

import Search from './search';
import NavLinks from './nav-links';
import MobileModal from '../mobile-modal';
import { IoMenuOutline } from 'react-icons/io5';
import useMobileModal from '@/hooks/useMobileModal';

export default function MobileMenu() {
  const { isOpen, openModal, closeModal } = useMobileModal();

  return (
    <>
      <IoMenuOutline
        size={24}
        className="mr-4 cursor-pointer"
        onClick={openModal}
      />
      {isOpen && (
        <MobileModal closeModal={closeModal}>
          <>
            <Search placeholder="Search for items" />
            <div className="mt-4"></div>
            <NavLinks />
          </>
        </MobileModal>
      )}
    </>
  );
}
