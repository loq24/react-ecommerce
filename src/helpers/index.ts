export const isInCart = (items: string, id: string) => {
  if (items) {
    const arrItems = items.split(',');
    return arrItems.some(function(v) {
      return v === id;
    });
  }
  return false;
};
