import Logo from './logo';
import Search from './search';
import NavLinks from './nav-links';
import Icons from './icons';
import MobileMenu from './mobile-menu';
import { Suspense } from 'react';

export default function Header() {
  return (
    <>
      <header className="mx-auto flex items-center justify-between bg-navyBlue p-4 text-white md:py-0">
        <div className="hidden md:flex md:items-end">
          <Logo />
          <NavLinks />
        </div>

        <div className="flex items-center md:hidden">
          <Suspense>
            <MobileMenu />
          </Suspense>
          <Logo />
        </div>

        <Suspense>
          <div className="mx-4 hidden md:block md:flex-grow">
            <Search placeholder="Search for items" />
          </div>
        </Suspense>

        <Icons />
      </header>
    </>
  );
}
