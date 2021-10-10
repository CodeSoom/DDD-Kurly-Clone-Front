import { render, screen } from '@testing-library/react';

import OriginPrice from 'src/products/components/OriginPrice';

describe('OriginPrice component', () => {
  const givenOriginPrice = 8640;

  it('should renders add comma what given number', () => {
    render(<OriginPrice>{givenOriginPrice}</OriginPrice>);
    screen.getByText(givenOriginPrice.toLocaleString());
  });
});
