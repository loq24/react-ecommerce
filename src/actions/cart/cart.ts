import { Dispatch } from 'redux';
import { CartCookieTypes } from '../types';
import { UpdateTotalCartItems } from './cart_interfaces';

export const updateTotalCartItems = (total: number) => {
  return (dispatch: Dispatch) => {
    dispatch<UpdateTotalCartItems>({
      type: CartCookieTypes.updateTotalCartItems,
      payload: total
    });
  };
};
