import React from 'react';
import CategoryList from './CategoryList';
import SkeletonList from '../SkeletonList/SkeletonList';
import { ProductCategory } from '../../actions';

interface CategoryListRendererProps {
  categories: ProductCategory[];
}

const CategoryListRenderer: React.FC<CategoryListRendererProps> = ({
  categories
}) => {
  if (categories.length === 0) {
    return <SkeletonList itemCount={3} />;
  }
  return <CategoryList categories={categories} />;
};

export default CategoryListRenderer;
