import { IoHeartOutline } from 'react-icons/io5';
import BagIcon from './bag-icon';
import ProfileIcon from './profile-icon';
import Link from 'next/link';
import { auth } from '@/auth';

export default async function Icons() {
  const session = await auth();

  return (
    <div className="flex items-center">
      <ProfileIcon session={session} />
      <Link href="/wishlist">
        <IoHeartOutline
          className="mx-4 cursor-pointer"
          size={24}
          title="Saved clothing items"
        />
      </Link>
      <BagIcon session={session} />
    </div>
  );
}
