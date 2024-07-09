import React from 'react';

interface ProductCardProps {
  _id: string;
  title: string;
  stock: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, title,stock }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${stock}</p>
    </div>
  );
};
export default ProductCard;
