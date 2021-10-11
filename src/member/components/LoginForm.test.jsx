import { render, screen } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders LoginForm', () => {
    render(<LoginForm />);

    expect(screen.getAllByText('로그인')[0]).toBeInTheDocument();
    expect(screen.getByText('회원가입')).toBeInTheDocument();
  });
});
