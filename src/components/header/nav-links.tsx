'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: 'ALL', href: '/shop/all' },
    { name: 'WOMEN', href: '/shop/women' },
    { name: 'MEN', href: '/shop/men' },
  ];

  return (
    <nav className="mx-3 flex flex-col md:flex-row md:items-end">
      {links.map((link, index) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'px-3 py-4 text-lg hover:bg-lightGray hover:text-black md:h-full md:border-l md:border-lightGray',
            {
              // underline when formatted is not string.
              // prettier-ignore
              'underline': pathname === link.href,
              'sm:border-r': index === links.length - 1,
            }
          )}
          aria-label={`${link.name}'s section`}
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </nav>
  );
}
