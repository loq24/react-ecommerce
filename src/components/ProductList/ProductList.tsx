import React from 'react';
import { Product } from '../../actions';
import ProductItem from './ProductItem';
import MainRowLayout from '../MainRowLayout/MainRowLayout';

interface SaleProductListProps {
  products: Product[];
}

const ProductList: React.FC<SaleProductListProps> = ({ products }) => {
  return (
    <MainRowLayout>
      {products.map(product => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </MainRowLayout>
  );
};

export default ProductList;
