'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function UserProfileDropdown() {
  return (
    <ul className="mx-4 md:mx-0">
      <li className="cursor-pointer px-3 py-4 hover:bg-lightGray">
        <Link href="/profile">Profile</Link>
      </li>

      <li className="mt-2 cursor-pointer px-3 py-4 hover:bg-lightGray">
        <button onClick={() => signOut()}>Sign Out</button>
      </li>
    </ul>
  );
}
