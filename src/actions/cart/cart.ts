import Cookies from 'js-cookie';
import { CART_COOKIE_NAME } from '../../config';
import { Dispatch } from 'redux';
import { CartCookieTypes } from '../types';
import { AddToCart, RemoveFromCart } from './cart_interfaces';
import { removeItem } from '../../helpers';

export const CART_ITEMS = Cookies.get(CART_COOKIE_NAME) || '';
export const CART_ITEMS_DELIMETER = ',';

export const addToCart = (id: string) => {
  return (dispatch: Dispatch) => {
    const updatedCart = CART_ITEMS
      ? CART_ITEMS + CART_ITEMS_DELIMETER + id
      : id;
    Cookies.set(CART_COOKIE_NAME, updatedCart);

    dispatch<AddToCart>({
      type: CartCookieTypes.addToCart,
      payload: updatedCart
    });
  };
};

export const removeFromCart = (id: string) => {
  return (dispatch: Dispatch) => {
    const updatedCart = removeItem(CART_ITEMS, id);
    Cookies.set(CART_COOKIE_NAME, updatedCart);

    dispatch<RemoveFromCart>({
      type: CartCookieTypes.removeFromCart,
      payload: updatedCart
    });
  };
};
