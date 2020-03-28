import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout/MainLayout';
import { fetchCategoryProducts, fetchCategory } from '../../actions';
import { useProductSelector, useCategorySelector } from '../../selectors';
import ProductListRenderer from '../../components/ProductList/ProductListRenderer';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';

const Category = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { category: categoryParam } = router.query;
  const category_id = categoryParam ? categoryParam[0] : null;
  const currentCategoryName = categoryParam ? categoryParam[1] : '...';

  const dispatch = useDispatch();
  const { categoryProducts } = useProductSelector();
  const { category } = useCategorySelector();
  const currentCategoryId = `${category?.id ?? ''}`;
  const curretCategoryDesc = category?.description ?? '...';

  useEffect(() => {
    if (category_id && category_id !== currentCategoryId) {
      setLoading(true);
      dispatch(
        fetchCategoryProducts(category_id, () => {
          setLoading(false);
        })
      );
      dispatch(fetchCategory(category_id));
    }
  }, [category_id]);

  return (
    <MainLayout title={`React eCommerce - ${currentCategoryName} category`}>
      <MainPageHeader
        title={`Category: ${currentCategoryName}`}
        subTitle={curretCategoryDesc}
      />
      <ProductListRenderer
        spin={isLoading}
        products={categoryProducts}
        breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
      />
    </MainLayout>
  );
};

export default Category;
