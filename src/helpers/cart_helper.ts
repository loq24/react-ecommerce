export const CART_ITEMS = 'CART_ITEMS';
export const CART_ITEMS_DELIMETER = ',';

export const isInCart = (items: string[], id: string) => {
  if (items.length > 0) {
    return items.some(function(v) {
      return v === id;
    });
  }
  return false;
};
