'use client';

import useMobileModal from '@/hooks/useMobileModal';
import MobileModal from '@/components/mobile-modal';
import Categories from '@/components/clothing/categories';
import Button from '@/components/button';
import { IoCaretDownOutline } from 'react-icons/io5';
import { CategoriesWithSubcategories } from '@/lib/definitions';

export default function MobileCategories({
  categories,
}: {
  categories: CategoriesWithSubcategories[];
}) {
  const { isOpen, openModal, closeModal } = useMobileModal();

  return (
    <>
      <Button onClick={openModal} Icon={IoCaretDownOutline} fullWidth>
        Categories
      </Button>

      {isOpen && (
        <MobileModal closeModal={closeModal}>
          <Categories categories={categories} />
        </MobileModal>
      )}
    </>
  );
}
