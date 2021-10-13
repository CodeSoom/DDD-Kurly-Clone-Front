import OrderProduct from './OrderProduct';

export default function OrderPage() {
  const product = {
    id: 1,
    name: '샤인토마토',
    price: 7980,
    quantity: 1,
    imgSrc: 'https://img-cf.kurly.com/shop/data/goods/1592812956809l0.jpg',
  };

  const handleClick = () => {
    // ToDo: Process Order
  };

  return (
    <>
      <h2>주문서</h2>
      <OrderProduct
        product={product}
        onClick={handleClick}
      />
    </>
  );
}
