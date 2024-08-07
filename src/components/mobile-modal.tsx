import { IoCloseOutline } from 'react-icons/io5';

interface MobileModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

export default function MobileModal({
  children,
  closeModal,
}: MobileModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen flex-col bg-white text-black md:hidden">
      <IoCloseOutline
        size={24}
        onClick={closeModal}
        className="my-7 ml-5 cursor-pointer"
      />

      <div className="overflow-auto">{children}</div>
    </div>
  );
}
