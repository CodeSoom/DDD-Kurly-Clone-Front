import React from 'react';
import { render, screen } from '@testing-library/react';

import Error from 'pages/_error';

describe('Error Page', () => {
  it('renders Error page', () => {
    render(<Error />);

    screen.getByText('Error');
  });
});
