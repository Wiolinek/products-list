import { useEffect, useState } from 'react';
import { Product } from 'interfaces/product.interface';
import { Filters } from 'interfaces/filter.enum';

const useFetchProducts = (selectedFilter: Filters) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const API_URL =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000/products'
          : 'https://my-json-server.typicode.com/Wiolinek/products_api/products';

      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json;odata.metadata=full',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Product[] = await response.json();
        setProducts(data);

        const newFilteredProducts = data.filter((product) => {
          if (selectedFilter === Filters.dogs) {
            return (
              product.categories.includes(Filters.dogs) ||
              product.categories.includes(Filters.humans)
            );
          } else if (selectedFilter === Filters.humans) {
            return product.categories.includes(Filters.humans);
          }
          return true;
        });

        setFilteredProducts(newFilteredProducts);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Fetch error:', error);
          setError(error.message);
        } else {
          console.error('Fetch error:', error);
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedFilter]);

  return { filteredProducts, loading, error };
};

export default useFetchProducts;
