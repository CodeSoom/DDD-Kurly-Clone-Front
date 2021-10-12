import { render, screen } from '@testing-library/react';

import SignUpGenderRadio from './SignUpGenderRadio';

describe('SignUpGenderRadio', () => {
  it('renders title', () => {
    render(<SignUpGenderRadio />);

    expect(screen.getByText('성별')).toBeInTheDocument();
  });

  it('renders labels', () => {
    render(<SignUpGenderRadio />);

    expect(screen.getByLabelText('남자')).toBeInTheDocument();
    expect(screen.getByLabelText('여자')).toBeInTheDocument();
    expect(screen.getByLabelText('선택안함')).toBeInTheDocument();
  });
});
