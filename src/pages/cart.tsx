import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CartListRenderer from '../components/Cart/CartListRenderer';
import { useCartSelector, useProductSelector } from '../selectors';
import { fetchProductsByIds } from '../actions';
import OrderSummary from '../components/Cart/OrderSummary';
import { CartContext } from '../contexts';
import './cart.less';

const Cart = () => {
  const { items, totalItems } = useCartSelector();
  const { cartProducts } = useProductSelector();
  const itemsLength = items.length;

  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsLength > 0) {
      const itemsStr = [...items].join();
      dispatch(fetchProductsByIds(itemsStr));
    }
  }, [itemsLength]);

  return (
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
  );
};

export default Cart;
