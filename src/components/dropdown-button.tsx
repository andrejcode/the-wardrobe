'use client';

import Button from './button';
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';

interface DropdownButtonProps {
  children: React.ReactNode;
  isOpen?: boolean;
  inverse?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  rounded?: boolean;
}

export default function DropdownButton({
  children,
  isOpen,
  inverse,
  onClick,
  fullWidth,
  rounded,
}: DropdownButtonProps) {
  const Icon = isOpen ? IoCaretUpOutline : IoCaretDownOutline;

  return (
    <Button
      Icon={Icon}
      inverse={inverse}
      onClick={onClick}
      fullWidth={fullWidth}
      rounded={rounded}
    >
      {children}
    </Button>
  );
}
