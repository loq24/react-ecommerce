import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Product, removeFromCart, updateCartItemCount } from '../../actions';
import { InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useCartSelector } from '../../selectors';
import { getCartItemCount } from '../../helpers';
import ProductInfo from './ProductInfo';

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [isDeleting, setDeleting] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const { id, price } = product;
  const product_id = `${id}`;

  const { items } = useCartSelector();
  const dispatch = useDispatch();

  const removeThisItem = () => {
    setDeleting(true);
    dispatch(removeFromCart(product_id));
  };

  const handleUpdateCartItem = (count = 1) => {
    if (itemCount > count) {
      dispatch(updateCartItemCount(product_id, price, -1));
    } else {
      dispatch(updateCartItemCount(product_id, price, 1));
    }
  };

  useEffect(() => {
    const totalItemCount = getCartItemCount(items, product_id);
    setItemCount(totalItemCount);
  });

  return (
    <div className={`cart-item ${isDeleting ? `deleting` : ''}`}>
      <ProductInfo product={product} />
      <div className="quantity-control">
        <InputNumber
          min={1}
          max={9}
          value={itemCount}
          onChange={(count) => handleUpdateCartItem(count)}
        />
      </div>
      <div className="delete">
        <DeleteOutlined onClick={removeThisItem} />
      </div>
    </div>
  );
};

export default CartItem;
