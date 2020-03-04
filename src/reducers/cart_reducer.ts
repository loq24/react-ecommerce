import {
  RemoveFromCart,
  AddToCart,
  CartCookieTypes,
  CART_ITEMS,
  CART_ITEMS_DELIMETER
} from '../actions';

type Actions = AddToCart | RemoveFromCart;

export interface CartState {
  totalItems: number;
  items: string;
}

const getTotalItemsFromString = (
  items: string,
  delimeter = CART_ITEMS_DELIMETER
): number => {
  return items ? items.split(delimeter).length : 0;
};

export const initialState: CartState = {
  totalItems: getTotalItemsFromString(CART_ITEMS),
  items: CART_ITEMS
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case CartCookieTypes.addToCart:
    case CartCookieTypes.removeFromCart:
      const items = action.payload;
      const totalItems = getTotalItemsFromString(items);
      return { ...state, totalItems, items: action.payload };
    default:
      return state;
  }
}
