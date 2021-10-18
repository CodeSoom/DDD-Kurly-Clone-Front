import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Order from 'pages/order/index';

jest.mock('react-redux');

describe('Order', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      order: {},
    }));
  });

  it('renders order title', () => {
    render(<Order />);

    expect(screen.getByText('주문서')).toBeInTheDocument();
  });
});
