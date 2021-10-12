import { render, screen } from '@testing-library/react';

import Order from 'pages/orders/index';

describe('Orders', () => {
  it('renders order title', () => {
    render(<Order />);

    expect(screen.getByText('주문서')).toBeInTheDocument();
  });
});
