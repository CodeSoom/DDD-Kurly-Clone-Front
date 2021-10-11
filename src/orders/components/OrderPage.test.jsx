import { render, screen, fireEvent } from '@testing-library/react';

import OrderPage from './OrderPage';

describe('Order Page', () => {
  it('renders order title', () => {
    render(<OrderPage />);

    expect(screen.getByText('주문서')).toBeInTheDocument();
  });

  it('calls handleClick to process order', () => {
    render(<OrderPage />);

    fireEvent.click(screen.getByRole('button', {
      name: /주문 하기/,
    }));
  });
});
