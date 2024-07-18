import { IoHeartOutline } from 'react-icons/io5';
import BagIcon from './bag-icon';
import ProfileIcon from './profile-icon';
import Link from 'next/link';

export default function Icons() {
  return (
    <div className="flex items-center">
      <ProfileIcon />
      <Link href="/wishlist">
        <IoHeartOutline
          className="mx-4 cursor-pointer"
          size={24}
          title="Saved clothing items"
        />
      </Link>
      <BagIcon />
    </div>
  );
}
