import { CartCookieTypes } from '../types';

export interface AddToCart {
  type: CartCookieTypes.addToCart;
  payload: string;
}

export interface RemoveFromCart {
  type: CartCookieTypes.removeFromCart;
  payload: string;
}
