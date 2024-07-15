import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function useMobileModal() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    closeModal();
  }, [pathname, searchParams]);

  return { isOpen, openModal, closeModal };
}
