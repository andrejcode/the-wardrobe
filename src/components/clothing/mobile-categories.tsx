'use client';

import useMobileModal from '@/hooks/useMobileModal';
import MobileModal from '@/components/mobile-modal';
import Categories from '@/components/clothing/categories';
import { CategoryWithSubcategories } from '@/lib/definitions';
import DropdownButton from '../dropdown-button';

interface MobileCategoriesProps {
  categories: CategoryWithSubcategories[];
}

export default function MobileCategories({
  categories,
}: MobileCategoriesProps) {
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
