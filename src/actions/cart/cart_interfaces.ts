import { CartCookieTypes } from '../types';

export interface UpdateTotalCartItems {
  type: CartCookieTypes.updateTotalCartItems;
  payload: number;
}
