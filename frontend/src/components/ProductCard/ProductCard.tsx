import React from 'react';
import ProductDetails from './ProductDetails';
import { Product } from '../../types';

interface ProductItemProps {
  product: Product;
}

const ProductCard: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="w-[278px] h-[601px] flex flex-col gap-4 rounded-[20px] shadow-custom-box-shadow">
      <div className="relative h-[283px] bg-neutral-grandient shadow-custom-box-shadow rounded-[20px] overflow-hidden">
        <img src={product.image} alt={product.name} className="absolute top-2.5 left-[41px]" />
      </div>
      <ProductDetails product={product} />
      <button className="h-12 w-full bg-green-gradient rounded-[14px] text-white font-bold leading-5">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
