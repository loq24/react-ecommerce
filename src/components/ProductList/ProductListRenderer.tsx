import React from 'react';
import ProductList from './ProductList';
import Spinner from '../Spinner/Spinner';
import { Product } from '../../actions';
import SkeletonList from '../SkeletonList/SkeletonList';

interface ProductListRendererProps {
  products: Product[];
  skeletonCount?: number;
  skeleton?: boolean;
  spin?: boolean;
}

const ProductListRenderer: React.FC<ProductListRendererProps> = ({
  products,
  skeleton,
  skeletonCount = 0,
  spin
}) => {
  if (skeleton && products.length === 0) {
    return <SkeletonList itemCount={skeletonCount} />;
  }
  if (spin || products.length === 0) {
    return <Spinner />;
  }
  return <ProductList products={products} />;
};

export default ProductListRenderer;
