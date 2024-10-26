import ProductCard from './ProductCard/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  return (
    <>
      {products && !loading && !error ? (
        <ul
          className="grid grid-cols-custom-grid-col gap-4 pt-10 pb-[79px] px-4 justify-center"
          aria-label="Products List"
        >
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-center shadow-custom-box-shadow rounded-[20px] overflow-hidden"
              aria-label={product.name}
            >
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center gap-4 pt-10 pb-[79px]">
          {loading && (
            <p className="text-xl" role="alert">
              Loading products...
            </p>
          )}
          {error && (
            <p className="text-xl" role="alert">
              Fetching products failed
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ProductList;
