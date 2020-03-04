import Link from 'next/link';
import { ProductCategory } from '../../actions';
import { Col, Card } from 'antd';
const { Meta } = Card;

interface CategoryItemProps {
  category: ProductCategory;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { name, description, image } = category;
  const featured_image = image?.src ?? '';

  return (
    <Col span={8} className="centered-col">
      <Link
        href="/category/[...category]"
        as={`/category/${category.id}/${category.slug}`}
        key={category.id}
      >
        <Card
          hoverable
          cover={
            featured_image ? <img alt="example" src={featured_image} /> : null
          }
        >
          <Meta title={name} description={description} />
        </Card>
      </Link>
    </Col>
  );
};

export default CategoryItem;
