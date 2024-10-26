interface ButtonProps {
  title: string;
  size: 'small' | 'large';
  variant: 'white' | 'yellow' | 'green';
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  customClass?: string;
}

const sizeClasses = {
  small: 'h-full py-2 px-6 sm:px-10',
  large: 'w-full py-3.5',
};

const variantClasses = {
  white: 'font-medium',
  yellow: 'bg-yellow-gradient text-white font-bold shadow-custom-box-shadow',
  green: 'bg-green-gradient text-white font-bold leading-5',
};

const Button = ({ title, size, variant = 'white', onClick, customClass }: ButtonProps) => {
  return (
    <button
      className={`rounded-[14px] ${sizeClasses[size]} ${variantClasses[variant]} ${customClass}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
