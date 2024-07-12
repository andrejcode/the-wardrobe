import { IoPersonOutline, IoHeartOutline } from 'react-icons/io5';
import BagIcon from './bag-icon';

export default function Icons() {
  return (
    <div className="flex items-center">
      <IoPersonOutline
        className="mr-4 cursor-pointer"
        size={24}
        title="User profile"
      />
      <IoHeartOutline
        className="mr-4 cursor-pointer"
        size={24}
        title="Saved clothing items"
      />
      <BagIcon />
    </div>
  );
}
