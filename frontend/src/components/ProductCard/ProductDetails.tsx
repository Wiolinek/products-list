import React from 'react';
import { Product } from '../../types';
import ReviewStar from '../ReviewStar';

interface ProductItemProps {
  product: Product;
}

const ProductDetails: React.FC<ProductItemProps> = ({ product }) => {
  const filledStars = Math.round(product.rating);
  console.log(filledStars);

  return (
    <div className="flex flex-col gap-4 px-4">
      <h3 className="text-[24px] font-bold leading-7">{product.name}</h3>
      <p className="text-[18px] font-medium leading-7 drop-shadow-custom-shadow">
        {product.description}
      </p>
      <div className="flex gap-[17px] items-center">
        <span className="flex gap-1.5">
          {Array.from({ length: 5 }, (_, index) => (
            <ReviewStar key={index} filled={index < filledStars} />
          ))}
        </span>
        <span className="font-medium leading-6">{product.rating}</span>
      </div>
      <a href="/" className="text-[#52B480] font-bold leading-6 drop-shadow-custom-shadow underline underline-offset-2">
        {product.reviews} reviews
      </a>
      <span className="text-[24px] font-bold leading-7">${product.price.toFixed(2)}</span>
    </div>
  );
};

export default ProductDetails;
