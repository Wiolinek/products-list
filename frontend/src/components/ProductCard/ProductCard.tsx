import ProductDetails from './ProductDetails';
import Button from '../ui/Button';
import { Product } from '../../interfaces/product.interface';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="w-full max-w-[278px] flex flex-col gap-4 ">
      <div className="relative h-[283px] bg-neutral-grandient shadow-custom-box-shadow rounded-[20px] ">
        <img
          src={`${process.env.PUBLIC_URL}/${product.image}`}
          alt={product.name}
          className="absolute top-2.5 left-[41px] object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4 px-4 pb-4">
        <ProductDetails product={product} />
        <Button title="Add to Cart" size="large" variant="green" onClick={() => {}} />
      </div>
    </article>
  );
};

export default ProductCard;
