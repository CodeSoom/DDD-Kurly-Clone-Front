import { render, screen, fireEvent } from '@testing-library/react';

import OrderProduct from './OrderProduct';

describe('OrderProduct', () => {
  const handleClick = jest.fn();

  const product = {
    id: 1,
    name: '샤인토마토',
    price: 7980,
    quantity: 1,
    imgSrc: 'https://img-cf.kurly.com/shop/data/goods/1592812956809l0.jpg',
  };

  context('with products', () => {
    it('renders order product information', () => {
      render((
        <OrderProduct
          product={product}
          onClick={handleClick}
        />
      ));

      const { name, price, quantity } = product;

      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(`${price} 원`)).toBeInTheDocument();
      expect(screen.getByText(`${quantity} 개`)).toBeInTheDocument();
    });

    it('renders total price of order products ', () => {
      render((
        <OrderProduct
          product={product}
          onClick={handleClick}
        />
      ));

      expect(screen.getByText(`결제 예정 금액: ${product.price} 원`)).toBeInTheDocument();
    });

    it('renders image of product', () => {
      render((
        <OrderProduct
          product={product}
          onClick={handleClick}
        />
      ));

      expect(screen.getByRole('img')).toHaveAttribute('alt', product.name);
    });
  });

  it('listens to handleClick click event to process order transaction', () => {
    render((
      <OrderProduct
        product={product}
        onClick={handleClick}
      />
    ));

    fireEvent.click(screen.getByRole('button', {
      name: /주문 하기/,
    }));

    expect(handleClick).toBeCalledTimes(1);
  });
});
