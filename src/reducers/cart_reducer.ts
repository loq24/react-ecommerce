import Cookies from 'js-cookie';
import { RemoveFromCart, AddToCart, CartTypes } from '../actions';
import { CART_ITEMS, CART_ITEMS_DELIMETER } from '../helpers';

//Cookies.remove(CART_ITEMS);

const stringifyArr = (arr: string[]): string => {
  return arr.join(CART_ITEMS_DELIMETER);
};

const saveToCartCookie = (arr: string[]) => {
  Cookies.set(CART_ITEMS, stringifyArr(arr), { expires: 7 });
};

const getCartCookie = (): string => {
  return Cookies.get(CART_ITEMS) || '';
};

const getCartCookieArr = (): string[] => {
  const items = getCartCookie();
  return items ? items.split(CART_ITEMS_DELIMETER) : [];
};

const getTotalItemsCookie = (): number => {
  const items = getCartCookie();
  return items ? items.split(CART_ITEMS_DELIMETER).length : 0;
};

const removeItem = (items: string[], id: string) => {
  const index = items.indexOf(id);
  if (index > -1) {
    items.splice(index, 1);
  }
  return items;
};

type Actions = AddToCart | RemoveFromCart;

export interface CartState {
  totalItems: number;
  items: string[];
}

export const initialState: CartState = {
  totalItems: getTotalItemsCookie(),
  items: getCartCookieArr()
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case CartTypes.addToCart:
      const cartItems = [...state.items, action.payload];
      saveToCartCookie(cartItems);

      return { ...state, items: cartItems, totalItems: cartItems.length };

    case CartTypes.removeFromCart:
      const item = action.payload;
      const items = [...state.items];
      const filteredItems = removeItem(items, item);
      saveToCartCookie(filteredItems);

      return {
        ...state,
        items: filteredItems,
        totalItems: filteredItems.length
      };
    default:
      return state;
  }
}
