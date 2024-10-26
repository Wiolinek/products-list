interface ButtonProps {
  title: string;
  size: 'small' | 'large';
  variant: 'outlined' | 'yellow' | 'green';
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  customClass?: string;
}

const sizeClasses = {
  small: 'h-full py-2 px-6',
  large: 'h-12 w-full ',
};

const variantClasses = {
  outlined: 'bg-white font-medium',
  yellow: 'bg-yellow-gradient text-white font-bold leading-5 shadow-custom-box-shadow',
  green: 'bg-green-gradient text-white font-bold leading-5',
};

const Button = ({ title, size, variant = 'outlined', onClick, customClass }: ButtonProps) => {
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
