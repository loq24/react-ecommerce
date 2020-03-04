import {
  ProductTypes,
  Product,
  FetchSaleProducts,
  FetchCategoryProducts,
  FetchProductById
} from '../actions';

type Actions = FetchSaleProducts | FetchCategoryProducts | FetchProductById;

export interface ProductState {
  saleProducts: Product[];
  categoryProducts: Product[];
  currentProduct?: Product;
}

export const initialState: ProductState = {
  saleProducts: [],
  categoryProducts: [],
  currentProduct: undefined
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case ProductTypes.fetchSaleProduts:
      return {
        ...state,
        saleProducts: action.payload
      };
    case ProductTypes.fetchCategoryProducts:
      return { ...state, categoryProducts: action.payload };
    case ProductTypes.fetchProductById:
      return { ...state, currentProduct: action.payload };
    default:
      return state;
  }
}
