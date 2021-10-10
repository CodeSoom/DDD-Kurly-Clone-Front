import { render, screen } from '@testing-library/react';

import CountryOfOrigin from 'src/products/components/CountryOfOrigin';

describe('CountryOfOrigin component', () => {
  const givenCountryOfOrigin = 'Tomato(Korean)';

  it('should renders given text', () => {
    render(<CountryOfOrigin>{givenCountryOfOrigin}</CountryOfOrigin>);

    expect(
      screen.getByText(givenCountryOfOrigin),
    ).toBeInTheDocument();
  });
});
