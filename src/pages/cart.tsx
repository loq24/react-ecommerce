import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CartListRenderer from '../components/Cart/CartListRenderer';
import { useCartSelector, useProductSelector } from '../selectors';
import { fetchProductsByIds } from '../actions';
import OrderSummary from '../components/Cart/OrderSummary';
import { calculateTotalPrice, getCartIds } from '../helpers';
import { CartContext } from '../contexts';
import './cart.less';

const Cart = () => {
  const { items, totalItems } = useCartSelector();
  const { cartProducts } = useProductSelector();
  const itemsLength = items.length;

  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsLength > 0) {
      const cartItemIds = getCartIds(items);
      dispatch(fetchProductsByIds(cartItemIds));
    }
  }, [itemsLength]);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(items));
  });

  return (
    <CartContext.Provider
      value={{
        totalPrice
      }}
    >
      <MainLayout title={`React eCommerce - Cart`}>
        <Row className="cart-wrapper boxed-width">
          <Col span={14}>
            <CartListRenderer
              cartProducts={cartProducts}
              totalItems={totalItems}
            />
          </Col>
          <Col span={10}>
            <OrderSummary cartProducts={cartProducts} totalItems={totalItems} />
          </Col>
        </Row>
      </MainLayout>
    </CartContext.Provider>
  );
};

export default Cart;
