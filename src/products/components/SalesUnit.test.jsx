import { render, screen } from '@testing-library/react';

import SalesUnit from 'src/products/components/SalesUnit';

describe('SalesUnit component', () => {
  const givenSalesUnit = '1pack';

  it('should renders given text', () => {
    render(<SalesUnit>{givenSalesUnit}</SalesUnit>);

    expect(
      screen.getByText(givenSalesUnit),
    ).toBeInTheDocument();
  });
});
