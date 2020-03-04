import React from 'react';
import { Product } from '../../actions';
import SingleProduct from './SingleProduct';
import SingleProductSkeleton from './SingleProductSkeleton/SingleProductSkeleton';

interface SingleProductRendererProps {
  product?: Product;
  loading: boolean;
}

const SingleProductRenderer: React.FC<SingleProductRendererProps> = ({
  product,
  loading
}) => {
  if (!product || loading) return <SingleProductSkeleton />;
  return <SingleProduct product={product} />;
};

export default SingleProductRenderer;
