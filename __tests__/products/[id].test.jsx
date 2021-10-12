import { render } from '@testing-library/react';

import Product from 'pages/products/[id]';

describe('Product Page', () => {
  it('should renders component', () => {
    render(<Product />);
  });
});
