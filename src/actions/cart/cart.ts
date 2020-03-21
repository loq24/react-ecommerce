import Cookies from 'js-cookie';
import { CART_COOKIE_NAME } from '../../config';
import { Dispatch } from 'redux';
import { CartTypes } from '../types';
import { AddToCart, RemoveFromCart } from './cart_interfaces';

export const CART_ITEMS = Cookies.get(CART_COOKIE_NAME) || '';
export const CART_ITEMS_DELIMETER = ',';

export const addToCart = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch<AddToCart>({
      type: CartTypes.addToCart,
      payload: id
    });
  };
};

export const removeFromCart = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch<RemoveFromCart>({
      type: CartTypes.removeFromCart,
      payload: id
    });
  };
};
