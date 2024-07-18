import Logo from './logo';
import Search from './search';
import NavLinks from './nav-links';
import Icons from './icons';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <>
      <header className="mx-auto flex items-center justify-between bg-navyBlue p-4 text-white md:py-0">
        <div className="hidden md:flex md:items-end">
          <Logo />
          <NavLinks />
        </div>

        <div className="flex items-center md:hidden">
          <MobileMenu />
          <Logo />
        </div>

        <div className="mx-4 hidden md:block md:flex-grow">
          <Search placeholder="Search for items" />
        </div>

        <Icons />
      </header>
    </>
  );
}
