'use client';

import { IoLogInOutline } from 'react-icons/io5';
import { signIn } from 'next-auth/react';

export default function SignInIcon() {
  return (
    <IoLogInOutline
      className="cursor-pointer"
      size={24}
      title="Sign in"
      onClick={() => signIn()}
    />
  );
}
