import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { updateTotalCartItems } from '../../actions';

const COOKIE_NAME = 'CART_ITEMS';
const DELIMETER = ',';
const CART_ITEMS = Cookies.get(COOKIE_NAME) || '';

//Cookies.remove(COOKIE_NAME);

const useCartCookie = () => {
  const [cartItems, setCartItems] = useState(CART_ITEMS);
  const dispatch = useDispatch();

  const totalItems = cartItems ? cartItems.split(DELIMETER).length : 0;

  useEffect(() => {
    dispatch(updateTotalCartItems(totalItems));
  }, [cartItems]);

  const updateCookieState = (items: string) => {
    Cookies.set(COOKIE_NAME, items);
    setCartItems(items);
  };

  const addToCart = (id: string) => {
    const newItem = cartItems ? cartItems + DELIMETER + id : id;
    updateCookieState(newItem);
  };

  const removeItem = (id: string) => {
    let itemsArr = cartItems ? cartItems.split(DELIMETER) : [];
    for (let i = 0; i < itemsArr.length; i++) {
      if (itemsArr[i] === id) {
        itemsArr.splice(i, 1);
        itemsArr.join(DELIMETER);
      }
    }
    updateCookieState(`${itemsArr}`);
  };

  const isInCart = (id: string) => {
    if (cartItems) {
      const arrItems = cartItems.split(',');
      return arrItems.some(function(v) {
        return v === id;
      });
    }
    return false;
  };

  return {
    cartItems,
    addToCart,
    removeItem,
    isInCart,
    totalItems
  };
};

export default useCartCookie;
