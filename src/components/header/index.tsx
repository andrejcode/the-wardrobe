'use client';

import Logo from './logo';
import Search from './search';
import NavLinks from './nav-links';
import Icons from './icons';
import { IoMenuOutline } from 'react-icons/io5';
import MobileMenu from './mobile-menu';
import useMobileModal from '@/hooks/useMobileModal';

export default function Header() {
  const { isOpen, openModal, closeModal } = useMobileModal();

  return (
    <>
      <header className="mx-auto flex items-center justify-between bg-navyBlue p-4 text-white md:py-0">
        <div className="hidden md:flex md:items-end">
          <Logo />
          <NavLinks />
        </div>

        <div className="flex items-center md:hidden">
          <div className="mr-4">
            <IoMenuOutline
              size={24}
              className="cursor-pointer"
              onClick={openModal}
            />
          </div>
          <Logo />
        </div>

        {/* TODO: search */}
        <div className="hidden md:block">
          <Search />
        </div>

        <Icons />
      </header>

      {isOpen && <MobileMenu closeMenu={closeModal} />}
    </>
  );
}
