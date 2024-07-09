import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../modules/products/api/products';
import ProductCard from './ProductCard';

interface Product {
  _id: string;
  title: string;
  stock: number;
  // Otros campos necesarios
}

const ProductList: React.FC<{ initialProducts: Product[] }> = ({ initialProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map(product => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
