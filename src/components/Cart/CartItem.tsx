import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Product, removeFromCart, updateCartItemCount } from '../../actions';
import { Typography, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useCartSelector } from '../../selectors';
import { getCartItemCount } from '../../helpers';

const { Title, Text } = Typography;

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [isDeleting, setDeleting] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const {
    id,
    name,
    images,
    price,
    regular_price,
    sale_price,
    on_sale,
    slug
  } = product;
  const featured_image = images.length > 0 ? images[0].src : '';
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
      <div className="featured-pp">
        <Link
          href="/product/[...product]"
          as={`/product/${product_id}/${slug}`}
        >
          <a>{featured_image && <img src={featured_image} />}</a>
        </Link>
      </div>
      <div className="description">
        <Link
          href="/product/[...product]"
          as={`/product/${product_id}/${slug}`}
        >
          <a>
            <Title level={4}>{name}</Title>
            <div>
              <Text
                type="secondary"
                delete={on_sale}
                className={`${on_sale ? 'on_sale' : 'regular'}`}
              >
                ${regular_price}
              </Text>
              {on_sale && <Text style={{ marginLeft: 10 }}>${sale_price}</Text>}
            </div>
          </a>
        </Link>
      </div>
      <div className="quantity-control">
        <InputNumber
          min={1}
          max={9}
          value={itemCount}
          onChange={count => handleUpdateCartItem(count)}
        />
      </div>
      <div className="delete">
        <DeleteOutlined onClick={removeThisItem} />
      </div>
    </div>
  );
};

export default CartItem;
