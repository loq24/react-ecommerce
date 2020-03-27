export enum ProductTypes {
  fetchSaleProduts = 'FETCH_SALE_PRODUCTS',
  fetchCategoryProducts = 'FETCH_CATEGORY_PRODUCTS',
  fetchProductById = 'FETCH_PRODUCT_BY_ID',
  fetchProductsByIds = 'FETCH_PRODUCTS_BY_IDS'
}

export enum CategoryTypes {
  fetchMainProductCategories = 'FETCH_MAIN_PRODUCT_CATEGORIES',
  fetchCategory = 'FETCH_CATEGORY'
}

export enum CartTypes {
  addToCart = 'ADD_TO_CART',
  removeFromCart = 'REMOVE_FROM_CART',
  updateCartItemCount = 'UPDATE_CART_ITEM_COUNT'
}
