interface HeadingProps {
  title: string;
  type: 'h1' | 'h2';
  variant: 'transparent' | 'yellow';
}

const Heading = ({ title, type, variant = 'transparent' }: HeadingProps) => {
  const variantClasses =
    variant === 'yellow'
      ? 'h-14 bg-[#FFE55A] max-w-[1441px] p-4 sm:p-0 rounded-tl-full rounded-br-full rounded-tr-full flex justify-center items-center'
      : '';

  return (
    <>
      {type === 'h1' && <h1>{title}</h1>}
      {type === 'h2' && <h2 className={variantClasses}>{title}</h2>}
    </>
  );
};

export default Heading;
