import { Layout } from 'antd';
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', marginTop: 50 }}>
      React eCommerce ©2020 Created by{' '}
      <a href="https://lougiequisel.com/" target="_blank">
        @loq24
      </a>
      . Visit{' '}
      <a target="_blank" href="https://github.com/loq24/react-ecommerce">
        Github
      </a>{' '}
      page.
    </Footer>
  );
};

export default MainFooter;
