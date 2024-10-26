import { Product } from '../../interfaces/product.interface';
import ReviewStar from './ReviewStar';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const filledStars = Math.round(product.rating);

  return (
    <>
      <h3 className="text-[24px] font-bold leading-7">{product.name}</h3>
      <p className="text-[18px] font-medium leading-6 drop-shadow-custom-drop-shadow">
        {product.description}
      </p>
      <div className="flex gap-[17px] items-center">
        <span className="flex gap-1.5">
          {Array.from({ length: 5 }, (_, index) => (
            <ReviewStar key={index} filled={index < filledStars} />
          ))}
        </span>
        <span className="font-medium leading-6 drop-shadow-custom-drop-shadow">{product.rating}</span>
      </div>
      <a
        href="/"
        className="text-[#52B480] font-bold leading-6 drop-shadow-custom-drop-shadow underline underline-offset-2"
      >
        {product.reviews} reviews
      </a>
      <span
        className="text-[24px] font-bold leading-7"
        aria-label={`Price: $${product.price.toFixed(2)}`}
      >
        ${product.price.toFixed(2)}
      </span>
    </>
  );
};

export default ProductDetails;
