import {
  RemoveFromCart,
  AddToCart,
  CartCookieTypes,
  CART_ITEMS
} from '../actions';
import { getTotalItemsFromCart } from '../helpers';

type Actions = AddToCart | RemoveFromCart;

export interface CartState {
  totalItems: number;
  items: string;
}

export const initialState: CartState = {
  totalItems: getTotalItemsFromCart(CART_ITEMS),
  items: CART_ITEMS
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case CartCookieTypes.addToCart:
    case CartCookieTypes.removeFromCart:
      const items = action.payload;
      const totalItems = getTotalItemsFromCart(items);
      return { ...state, totalItems, items: action.payload };
    default:
      return state;
  }
}
