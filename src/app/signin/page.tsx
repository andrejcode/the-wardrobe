import { auth } from '@/auth';
import Button from '@/components/button';
import Logo from '@/components/header/logo';
import { signInWithGoogle } from '@/lib/actions';
import { redirect } from 'next/navigation';
import { IoLogoGoogle } from 'react-icons/io5';

export default async function SignInPage() {
  const session = await auth();

  if (session && session.user) {
    redirect('/');
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg p-24 shadow-lg">
        <Logo />
        <form action={signInWithGoogle} className="mt-12">
          <Button type="submit" Icon={IoLogoGoogle} rounded>
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
