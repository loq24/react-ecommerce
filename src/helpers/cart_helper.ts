import { CART_ITEMS_DELIMETER } from '../actions';

export const removeItem = (
  items: string,
  id: string,
  delimeter = CART_ITEMS_DELIMETER
) => {
  let itemsArr = items ? items.split(delimeter) : [];
  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i] === id) {
      itemsArr.splice(i, 1);
      itemsArr.join(delimeter);
    }
  }
  return `${itemsArr}`;
};

export const isInCart = (
  items: string,
  id: string,
  delimeter = CART_ITEMS_DELIMETER
) => {
  if (items) {
    const arrItems = items.split(delimeter);
    return arrItems.some(function(v) {
      return v === id;
    });
  }
  return false;
};

export const getTotalItemsFromCart = (
  items: string,
  delimeter = CART_ITEMS_DELIMETER
): number => {
  return items ? items.split(delimeter).length : 0;
};
