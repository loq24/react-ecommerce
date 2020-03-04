import React, { useEffect } from 'react';
import Link from 'next/link';
import { Layout, Row, Col, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useCartSelector } from '../../../selectors';
import { updateTotalCartItems } from '../../../actions';
import useCartCookie from '../../Hooks/useCartCookie';
import './MainNav.less';

const { Header } = Layout;

const MainNav = () => {
  const { totalItems } = useCartCookie();
  const { totalCartItems } = useCartSelector();

  const dispatch = useDispatch();

  console.log('MainNavItems', totalCartItems);

  useEffect(() => {
    dispatch(updateTotalCartItems(totalItems));
  }, []);

  return (
    <Header className="main-nav">
      <Row justify="space-between">
        <Col span={2}>
          <Link href="/">
            <a style={{ color: '#777' }}>Home</a>
          </Link>
        </Col>
        <Col span={2} style={{ textAlign: 'right' }}>
          <Badge
            count={totalCartItems}
            style={{
              backgroundColor: '#fff',
              color: '#999',
              boxShadow: '0 0 0 1px #d9d9d9 inset'
            }}
          >
            <ShoppingCartOutlined style={{ fontSize: 25 }} />
          </Badge>
        </Col>
      </Row>
    </Header>
  );
};

export default MainNav;
