import Link from 'next/link';
import { Product } from '../../actions';
import { Row, Col, Card, Typography, Button } from 'antd';
const { Text } = Typography;

interface SaleProductItemProps {
  product: Product;
}

const SaleProductItem: React.FC<SaleProductItemProps> = ({ product }) => {
  const {
    id,
    slug,
    name,
    regular_price,
    sale_price,
    on_sale,
    images
  } = product;
  const featured_image = images.length > 0 ? images[0].src : '';
  return (
    <Link href="/product/[...product]" as={`/product/${id}/${slug}`}>
      <Col span={6} className="centered-col">
        <Card
          hoverable
          cover={
            featured_image ? <img alt="example" src={featured_image} /> : null
          }
        >
          <Row>
            <Text style={{ textAlign: 'center' }} strong>
              {name}
            </Text>
            {on_sale && <Button style={{ marginLeft: 10 }}>Sale!</Button>}
          </Row>
          <Row>
            <Text type="secondary" delete={on_sale}>
              {`$${regular_price}`}
            </Text>
            {on_sale && (
              <Text style={{ marginLeft: 15 }}>{`$${sale_price}`}</Text>
            )}
          </Row>
        </Card>
      </Col>
    </Link>
  );
};

export default SaleProductItem;
