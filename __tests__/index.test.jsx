import React from 'react';
import { render } from '@testing-library/react';

import Home from 'pages/index';

describe('Home', () => {
  it('render에 성공합니다.', () => {
    render(<Home />);
  });
});
