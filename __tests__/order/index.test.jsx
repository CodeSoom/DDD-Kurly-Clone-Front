import { render, screen } from '@testing-library/react';

import Order from 'pages/order/index';

describe('Order', () => {
  it('renders order title', () => {
    render(<Order />);

    expect(screen.getByText('주문서')).toBeInTheDocument();
  });
});
