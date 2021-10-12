import { render, screen } from '@testing-library/react';

import SignUpAddress from './SignUpAddress';

describe('SignUpAddress', () => {
  it('renders title', () => {
    render(<SignUpAddress />);

    expect(screen.getByText('주소')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders button and warning', () => {
    render(<SignUpAddress />);

    expect(screen.getByRole('button', { name: '인증번호 받기' })).toBeInTheDocument();
    expect(screen.getByText('배송지에 따라 상품 정보가 달라질 수 있습니다.')).toBeInTheDocument();
  });
});
