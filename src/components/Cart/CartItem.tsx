import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Product, removeFromCart } from '../../actions';
import { Typography, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface CartItemProps {
  item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [isDeleting, setDeleting] = useState(false);
  const { id, name, images, regular_price, sale_price, on_sale } = item;
  const featured_image = images.length > 0 ? images[0].src : '';
  const product_id = `${id}`;

  const dispatch = useDispatch();

  const removeThisItem = () => {
    setDeleting(true);
    dispatch(removeFromCart(product_id));
  };

  return (
    <div className={`cart-item ${isDeleting ? `deleting` : ''}`}>
      <div className="featured-pp">
        {featured_image && <img src={featured_image} />}
      </div>
      <div className="description">
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
      </div>
      <div className="quantity-control">
        <InputNumber min={1} max={9} defaultValue={1} />
      </div>
      <div className="delete">
        <DeleteOutlined onClick={removeThisItem} />
      </div>
    </div>
  );
};

export default CartItem;
