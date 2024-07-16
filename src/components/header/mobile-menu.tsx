import Search from './search';
import NavLinks from './nav-links';
import MobileModal from '../mobile-modal';

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <MobileModal closeModal={closeMenu}>
      <>
        <Search placeholder="Search for items" />
        <NavLinks />
      </>
    </MobileModal>
  );
}
