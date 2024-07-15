'use client';

import useMobileModal from '@/hooks/useMobileModal';
import MobileModal from '@/components/mobile-modal';
import Categories from '@/components/clothing/categories';
import { CategoriesWithSubcategories } from '@/lib/definitions';
import DropdownButton from '../dropdown-button';

export default function MobileCategories({
  categories,
}: {
  categories: CategoriesWithSubcategories[];
}) {
  const { isOpen, openModal, closeModal } = useMobileModal();

  return (
    <>
      <DropdownButton isOpen={isOpen} onClick={openModal} fullWidth>
        Categories
      </DropdownButton>

      {isOpen && (
        <MobileModal closeModal={closeModal}>
          <Categories categories={categories} />
        </MobileModal>
      )}
    </>
  );
}
