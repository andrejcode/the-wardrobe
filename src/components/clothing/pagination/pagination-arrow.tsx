import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import clsx from 'clsx';

interface PaginationArrowProps {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}

export default function PaginationArrow({
  href,
  direction,
  isDisabled,
}: PaginationArrowProps) {
  const icon =
    direction === 'left' ? (
      <IoIosArrowBack
        className={clsx({ 'cursor-pointer': isDisabled === false })}
        size={24}
        title="Left arrow"
      />
    ) : (
      <IoIosArrowForward
        className={clsx({ 'cursor-pointer': isDisabled === false })}
        size={24}
        title="Right arrow"
      />
    );

  return isDisabled ? <>{icon}</> : <Link href={href}>{icon}</Link>;
}
