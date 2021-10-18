import { useAppSelector, useAppDispatch } from '../../common/hooks';

import OrderProduct from './OrderProduct';
import OrderComplete from './OrderComplete';
import OrderError from './OrderError';

import { complete } from '../slice';

import { get } from '../../common/utils';

export default function OrderPage() {
  const dispatch = useAppDispatch();
  const product = {
    id: 1,
    name: '샤인토마토',
    price: 7980,
    quantity: 1,
    imgSrc: 'https://img-cf.kurly.com/shop/data/goods/1592812956809l0.jpg',
  };

  const order = useAppSelector(get('order'));

  const { completion, error } = order;

  const handleClick = () => {
    dispatch(complete());
  };

  if (error) {
    return ((
      <OrderError />
    ));
  }

  if (!error && completion) {
    return ((
      <OrderComplete />
    ));
  }

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
