import { UpdateTotalCartItems, CartCookieTypes } from '../actions';

type Actions = UpdateTotalCartItems;

export interface CartState {
  totalCartItems: number;
}

export const initialState: CartState = {
  totalCartItems: 0
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case CartCookieTypes.updateTotalCartItems:
      return { ...state, totalCartItems: action.payload };
    default:
      return state;
  }
}
