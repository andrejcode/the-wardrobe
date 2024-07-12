import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  inverse?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  rounded?: boolean;
  Icon?: React.ElementType;
}

export default function Button({
  children,
  inverse = false,
  onClick,
  fullWidth,
  rounded = false,
  Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'cursor-pointer border px-4 py-2 transition-colors duration-300 md:text-lg',
        {
          'border-black text-black hover:bg-black hover:text-white':
            inverse === false,
          'border-white text-white hover:bg-white hover:text-black': inverse,
          'w-full': fullWidth,
          // prettier-ignore
          'rounded': rounded,
        }
      )}
    >
      <div className="flex items-center justify-center">
        {children}
        {Icon && (
          <div className="mx-1">
            <Icon />
          </div>
        )}
      </div>
    </button>
  );
}
