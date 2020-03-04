import { Row, Col, Typography, Descriptions, Button } from 'antd';
import { Product } from '../../actions';
import { useDispatch } from 'react-redux';
import { useCartSelector } from '../../selectors';
import { isInCart } from '../../helpers';
import { addToCart } from '../../actions';
import './SingleProduct.less';

const { Text } = Typography;
const { Item } = Descriptions;

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const {
    id,
    name,
    description,
    images,
    regular_price,
    sale_price,
    on_sale
  } = product;
  const product_id = `${id}`;
  const featured_image = images.length > 0 ? images[0].src : '';
  const { items } = useCartSelector();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product_id));
  };

  return (
    <Row className="product-wrapper" justify="space-around">
      <Col span={10} className="product-image">
        {featured_image && <img src={featured_image} />}
      </Col>
      <Col span={14} className="product-description">
        <Descriptions title={name} column={1}>
          <Item key="price" label="Price" className="price-description">
            <Text
              type="secondary"
              delete={on_sale}
              className={`${on_sale ? 'on_sale' : 'regular'}`}
            >
              ${regular_price}
            </Text>
            {on_sale && <Text style={{ marginLeft: 15 }}>${sale_price}</Text>}
          </Item>
          <Item key="desc" label="Description">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </Item>
          <Item key="but" label="">
            <Button
              type="primary"
              disabled={isInCart(items, product_id)}
              onClick={addItemToCart}
            >
              Add To Cart
            </Button>
          </Item>
        </Descriptions>
      </Col>
    </Row>
  );
};

export default SingleProduct;
