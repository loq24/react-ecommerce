import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CartListRenderer from '../components/Cart/CartListRenderer';
import { useCartSelector, useProductSelector } from '../selectors';
import { fetchProductsByIds } from '../actions';
import OrderSummary from '../components/Cart/OrderSummary';
import { calculateTotalPrice, getCartIds } from '../helpers';
import { CartContext, SkeletonListContext, Breakpoints } from '../contexts';
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
      <SkeletonListContext.Provider
        value={{ xl: 14, lg: 24, md: 24, sm: 24, xs: 24 }}
      >
        <MainLayout title={`React eCommerce - Cart`}>
          <Row className="cart-wrapper boxed-width">
            <Col xl={14} lg={24} md={24} sm={24} xs={24}>
              <CartListRenderer
                cartProducts={cartProducts}
                totalItems={totalItems}
              />
            </Col>
            <Col xl={10} lg={24} md={24} sm={24} xs={24}>
              <OrderSummary
                cartProducts={cartProducts}
                totalItems={totalItems}
              />
            </Col>
          </Row>
        </MainLayout>
      </SkeletonListContext.Provider>
    </CartContext.Provider>
  );
};

export default Cart;
