import { render, screen } from '@testing-library/react';

import PackingType from 'src/products/components/PackingType';

describe('PackingType component', () => {
  const givenPackingType = 'Refrigerator / Paper packaging';

  it('should renders given text', () => {
    render(<PackingType>{givenPackingType}</PackingType>);

    expect(
      screen.getByText(givenPackingType),
    ).toBeInTheDocument();
  });
});
