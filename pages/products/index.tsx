// pages/products/index.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import MainLayout from '../../layouts/MainLayout';
import ProductList from '../../components/products/ProductList';
import { fetchProducts } from '../../modules/products/api/products';

const ProductsPage = ({ products }) => {
  return (
    <MainLayout>
      <h1>Products</h1>
      <ProductList initialProducts={products} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('Fetching products on server...');
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
};


export default ProductsPage;
