import { ProductTypes } from '../types';

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  date_created: string;
  description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  related_ids: number[];
  images: ProductImage[];
}

export interface FetchSaleProducts {
  type: ProductTypes.fetchSaleProduts;
  payload: Product[];
}

export interface FetchCategoryProducts {
  type: ProductTypes.fetchCategoryProducts;
  payload: Product[];
}

export interface FetchProductById {
  type: ProductTypes.fetchProductById;
  payload: Product;
}

export interface FetchProductsByIds {
  type: ProductTypes.fetchProductsByIds;
  payload: Product[];
}
