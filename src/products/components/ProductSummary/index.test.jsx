import { render, screen } from '@testing-library/react';

import ProductSummary from 'src/products/components/ProductSummary';

describe('ProductSummary component', () => {
  const givenDT = '판매단위';
  const givenDD = '1pack';
  const givenChildren = (
    <>
      <dt>{givenDT}</dt>
      <dd>{givenDD}</dd>
    </>
  );

  it('should renders given components', () => {
    render(<ProductSummary>{givenChildren}</ProductSummary>);

    expect(
      screen.getByText(givenDT),
    ).toBeInTheDocument();
    expect(
      screen.getByText(givenDD),
    ).toBeInTheDocument();
  });
});
