import { Dispatch } from 'redux';
import { wooApi } from '../../config';
import {
  FetchMainProductCategories,
  FetchCategory
} from './category_interfaces';
import { CategoryTypes } from '../types';

export const fetchMainProductCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await wooApi.get(
        `products/categories?hide_empty=true&parent=0`
      );
      dispatch<FetchMainProductCategories>({
        type: CategoryTypes.fetchMainProductCategories,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCategory = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await wooApi.get(`products/categories/${id}`);
      dispatch<FetchCategory>({
        type: CategoryTypes.fetchCategory,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
