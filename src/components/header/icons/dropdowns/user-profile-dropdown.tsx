'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function UserProfileDropdown() {
  return (
    <ul className="mx-4 md:mx-0">
      <li className="my-4">
        <Link href="/profile" className="cursor-pointer p-4 hover:bg-lightGray">
          Profile
        </Link>
      </li>

      <li className="mt-4">
        <button
          className="cursor-pointer p-4 hover:bg-lightGray"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </li>
    </ul>
  );
}
