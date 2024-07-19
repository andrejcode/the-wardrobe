import Link from 'next/link';
import { IoLogInOutline } from 'react-icons/io5';

export default function SignInIcon() {
  return (
    <Link href="/signin">
      <IoLogInOutline className="cursor-pointer" size={24} title="Sign in" />
    </Link>
  );
}
