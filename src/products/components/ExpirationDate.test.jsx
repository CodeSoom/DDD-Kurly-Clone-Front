import { render, screen } from '@testing-library/react';

import ExpirationDate from 'src/products/components/ExpirationDate';

describe('ExpirationDate component', () => {
  const givenExpirationDate = 'Mark the product separately/ We will ship it with at least 2 days left.';

  it('should renders given text', () => {
    render(<ExpirationDate>{givenExpirationDate}</ExpirationDate>);

    expect(
      screen.getByText(givenExpirationDate),
    ).toBeInTheDocument();
  });
});
