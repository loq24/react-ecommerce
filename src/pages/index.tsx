import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../components/MainLayout/MainLayout';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import CategoryListRenderer from '../components/CategoryList/CategoryListRenderer';
import ProductListRenderer from '../components/ProductList/ProductListRenderer';
import SimpleHeading from '../components/SimpleHeading';
import { fetchMainProductCategories, fetchSaleProducts } from '../actions';
import { useCategorySelector, useProductSelector } from '../selectors';

const Home = () => {
  const dispatch = useDispatch();
  const { saleProducts } = useProductSelector();
  const { mainCategories } = useCategorySelector();

  useEffect(() => {
    dispatch(fetchMainProductCategories());
    dispatch(fetchSaleProducts());
  }, []);

  return (
    <MainLayout title="React eCommerce">
      <MainCarousel />

      <SimpleHeading title="Product Categories" />
      <CategoryListRenderer categories={mainCategories} />

      <SimpleHeading title="On sale Products" level={2} />
      <ProductListRenderer skeleton skeletonCount={4} products={saleProducts} />
    </MainLayout>
  );
};

export default Home;
