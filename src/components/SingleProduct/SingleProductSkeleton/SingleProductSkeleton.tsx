import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import './SingleProductSkeleton.less';

const { Button } = Skeleton;

const SingleProductSkeleton: React.FC = () => {
  return (
    <Row className="product-skeleton-wrapper" justify="space-around">
      <Col span={10} className="product-skeleton-image">
        <Skeleton
          loading={true}
          active
          avatar={{ shape: 'square' }}
          paragraph={false}
          title={false}
        />
      </Col>
      <Col span={14} className="product-skeleton-description">
        <Skeleton
          loading={true}
          active
          avatar={false}
          paragraph={{
            rows: 5,
            width: ['50%', '30%', '100%', '100%', '100%']
          }}
          title={{ width: '70%' }}
        />
        <Button active size="large" />
      </Col>
    </Row>
  );
};

export default SingleProductSkeleton;
