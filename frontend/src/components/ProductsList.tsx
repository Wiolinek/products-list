import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList: React.FC = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center gap-4 pt-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
