import { Layout } from 'antd';
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', marginTop: 50 }}>
      React eCommerce ©2020 Created by{' '}
      <a href="https://lougiequisel.com/" target="_blank">
        @loq24
      </a>
    </Footer>
  );
};

export default MainFooter;
