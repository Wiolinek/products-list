import React from 'react';

interface HeadingProps {
  title: string;
  type: 'h1' | 'h2';
  variant: 'transparent' | 'yellow';
}

const Header: React.FC<HeadingProps> = ({ title, type, variant }) => {
  const variantClasses =
    variant === 'yellow'
      ? 'h-14 bg-[#FFE55A] max-w-[1441px] rounded-tl-full rounded-br-full rounded-tr-full flex justify-center items-center'
      : '';

  return (
    <>
      {type === 'h1' ? (
        <h1 className="font-nunito font-extrabold text-[40px] leading-snug text-center">{title}</h1>
      ) : (
        <h2 className={`w-full text-base text-center font-semibold leading-6 ${variantClasses}`}>
          {title}
        </h2>
      )}
    </>
  );
};

export default Header;
