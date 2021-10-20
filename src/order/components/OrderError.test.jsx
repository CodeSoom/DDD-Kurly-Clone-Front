import { render, screen } from '@testing-library/react';

import OrderError from './OrderError';

describe('OrderError', () => {
  it('renders error message', () => {
    render(<OrderError />);

    expect(screen.getByText('주문 과정 중 오류가 발생했습니다.'))
      .toBeInTheDocument();
  });
});
