import React from 'react';
import { Skeleton, Col } from 'antd';

interface SkeletonItemProps {
  itemCount: number;
}

const baseSpan = 24;

const SkeletonItem: React.FC<SkeletonItemProps> = ({ itemCount }) => {
  return (
    <Col span={baseSpan / itemCount} style={{ textAlign: 'center' }}>
      <Skeleton
        loading={true}
        active
        avatar={{ shape: 'square' }}
        paragraph={false}
        title={false}
      />
    </Col>
  );
};

export default SkeletonItem;
