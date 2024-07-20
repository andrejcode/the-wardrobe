import { addOrRemoveFromWishlist } from '@/lib/actions';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

export default function SaveIcon({
  id,
  userId,
  isInWishlist,
}: {
  id: number;
  userId: string | null;
  isInWishlist: boolean;
}) {
  const addOrRemoveFromWishlistWithIds = addOrRemoveFromWishlist.bind(
    null,
    id,
    userId,
    isInWishlist
  );

  return (
    <>
      <form action={addOrRemoveFromWishlistWithIds}>
        <button type="submit" className="px-4">
          {isInWishlist ? (
            <IoHeart size={32} title="Remove" />
          ) : (
            <IoHeartOutline size={32} title="Save" />
          )}
        </button>
      </form>
    </>
  );
}
