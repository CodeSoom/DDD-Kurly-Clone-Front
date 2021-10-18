import { render, screen } from '@testing-library/react';

import LoginPage from 'pages/login';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');

describe('LoginPage', () => {
  it('renders login title', () => {
    render(<LoginPage />);

    expect(screen.getAllByText('로그인')[0]).toBeInTheDocument();
  });
});
