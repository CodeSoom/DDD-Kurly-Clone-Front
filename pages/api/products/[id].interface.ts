import type {
  ID,
  Image,
  Name,
  Price,
  Summary,
  OrderLink,
} from 'pages/api/products/[id].type';

interface ProductData {
  id: ID;
  image: Image;
  name: Name;
  price: Price;
  summary: Summary;
  orderLink: OrderLink;
}

export default ProductData;
