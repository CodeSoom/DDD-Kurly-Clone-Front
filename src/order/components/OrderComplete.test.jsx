import { render, screen } from '@testing-library/react';

import OrderComplete from './OrderComplete';

describe('OrderComplete', () => {
  it('renders complete message', () => {
    render(<OrderComplete />);

    expect(screen.getByText('주문이 완료되었습니다.'))
      .toBeInTheDocument();
  });
});
