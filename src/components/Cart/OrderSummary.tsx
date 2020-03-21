import React from 'react';
import { Typography, Button } from 'antd';
import { Product } from '../../actions';

const { Title, Text } = Typography;

interface OrderSummaryProps {
  cartProducts: Product[];
  totalItems: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartProducts,
  totalItems
}) => {
  return (
    <div className="order-summary">
      <Title level={3}>Order Summary</Title>
      <div>
        <Text type="secondary">Total</Text>
        <Text disabled={cartProducts.length === 0}>₱0.00</Text>
      </div>
      <Button
        type="primary"
        size="large"
        disabled={cartProducts.length === 0 || totalItems === 0}
      >
        CHECKOUT
      </Button>
    </div>
  );
};

export default OrderSummary;
