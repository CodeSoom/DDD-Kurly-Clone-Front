import { render, screen } from '@testing-library/react';

import PackagingType from 'src/products/components/ProductSummary/PackagingType';

describe('PackagingType component', () => {
  const givenPackagingType = 'Refrigerator / Paper packaging';

  it('should renders given text', () => {
    render(<PackagingType>{givenPackagingType}</PackagingType>);

    expect(
      screen.getByText(givenPackagingType),
    ).toBeInTheDocument();
  });
});
