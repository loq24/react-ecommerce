import React from 'react';
import { Row, Col } from 'antd';
import CartItem from './CartItem';
import { Product } from '../../actions';

interface CartListProps {
  items: Product[];
}

const CartList: React.FC<CartListProps> = ({ items }) => {
  return (
    <div className="cart-list">
      {items.map(item => {
        return <CartItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default CartList;
