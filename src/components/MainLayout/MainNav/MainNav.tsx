import React from 'react';
import Link from 'next/link';
import { Layout, Row, Col, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCartSelector } from '../../../selectors';
import './MainNav.less';

const { Header } = Layout;

const MainNav = () => {
  const { totalItems } = useCartSelector();

  return (
    <Header className="main-nav">
      <Row justify="space-between">
        <Col span={2}>
          <Link href="/">
            <a style={{ color: '#777' }}>Home</a>
          </Link>
        </Col>
        <Col span={2} style={{ textAlign: 'right' }}>
          <Link href="/cart">
            <Badge
              count={totalItems}
              style={{
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset'
              }}
            >
              <ShoppingCartOutlined
                style={{ fontSize: 25, cursor: 'pointer' }}
              />
            </Badge>
          </Link>
        </Col>
      </Row>
    </Header>
  );
};

export default MainNav;
