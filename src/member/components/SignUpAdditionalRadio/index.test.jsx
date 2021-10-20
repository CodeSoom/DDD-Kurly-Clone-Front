import { render, screen } from '@testing-library/react';

import SignUpAdditionalRadio from '.';

describe('SignUpAdditionalRadio', () => {
  it('renders title', () => {
    render(<SignUpAdditionalRadio />);

    expect(screen.getByText('추가입력 사항')).toBeInTheDocument();
  });

  it('renders labels', () => {
    render(<SignUpAdditionalRadio />);

    expect(screen.getByLabelText('추천인 아이디')).toBeInTheDocument();
    expect(screen.getByLabelText('참여 이벤트명')).toBeInTheDocument();
  });
});
