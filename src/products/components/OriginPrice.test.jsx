import { render, screen } from '@testing-library/react';

import OriginPrice from 'src/products/components/OriginPrice';

describe('OriginPrice component', () => {
  const givenOriginPrice = 8640;
  const expectResult = '8,640'; // aka. givenOriginPrice.toLocaleString();

  it('should renders add comma what given number', () => {
    render(<OriginPrice>{givenOriginPrice}</OriginPrice>);

    expect(
      screen.getByText(expectResult),
    ).toBeInTheDocument();
  });
});
