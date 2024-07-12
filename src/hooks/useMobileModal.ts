import { useState } from 'react';

export default function useMobileModal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return { isOpen, openModal, closeModal };
}
