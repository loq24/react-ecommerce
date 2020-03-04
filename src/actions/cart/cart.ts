import Cookies from 'js-cookie';
import { CART_COOKIE_NAME } from '../../config';
import { Dispatch } from 'redux';
import { CartCookieTypes } from '../types';
import { AddToCart, RemoveFromCart } from './cart_interfaces';

export const CART_ITEMS = Cookies.get(CART_COOKIE_NAME) || '';
export const CART_ITEMS_DELIMETER = ',';
export const removeItem = (id: string) => {
  let itemsArr = CART_ITEMS ? CART_ITEMS.split(CART_ITEMS_DELIMETER) : [];
  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i] === id) {
      itemsArr.splice(i, 1);
      itemsArr.join(CART_ITEMS_DELIMETER);
    }
  }
  return `${itemsArr}`;
};

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
    const updatedCart = removeItem(id);
    Cookies.set(CART_COOKIE_NAME, updatedCart);

    dispatch<RemoveFromCart>({
      type: CartCookieTypes.removeFromCart,
      payload: updatedCart
    });
  };
};
