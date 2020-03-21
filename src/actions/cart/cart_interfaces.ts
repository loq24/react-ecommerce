import { CartTypes } from '../types';

export interface AddToCart {
  type: CartTypes.addToCart;
  payload: string;
}

export interface RemoveFromCart {
  type: CartTypes.removeFromCart;
  payload: string;
}
