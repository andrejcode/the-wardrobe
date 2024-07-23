import Link from 'next/link';
import { signOut } from '@/auth';

export default function UserProfileDropdown() {
  return (
    <ul className="mx-4 md:mx-0">
      <li className="my-4 flex w-full items-center">
        <Link
          href="/profile"
          className="flex-1 cursor-pointer p-4 text-center hover:bg-lightGray"
        >
          Profile
        </Link>
      </li>

      <li className="mt-4 flex w-full items-center">
        <form
          className="flex w-full"
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button
            type="submit"
            className="flex-1 cursor-pointer p-4 text-center hover:bg-lightGray"
          >
            Sign Out
          </button>
        </form>
      </li>
    </ul>
  );
}
