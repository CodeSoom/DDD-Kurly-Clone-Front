import { render, screen } from '@testing-library/react';

import SignUpBirthInput from './SignUpBirthInput';

describe('SignUpBirthInput', () => {
  it('renders title', () => {
    render(<SignUpBirthInput />);

    expect(screen.getByText('생년월일')).toBeInTheDocument();
  });

  it('renders labels', () => {
    render(<SignUpBirthInput />);

    expect(screen.getByPlaceholderText('YYYY')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('MM')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('DD')).toBeInTheDocument();
  });
});
