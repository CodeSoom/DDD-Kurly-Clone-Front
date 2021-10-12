import { render, screen } from '@testing-library/react';

import LoginPage from 'pages/login';

describe('LoginPage', () => {
  it('renders login title', () => {
    render(<LoginPage />);

    expect(screen.getAllByText('로그인')[0]).toBeInTheDocument();
  });
});
