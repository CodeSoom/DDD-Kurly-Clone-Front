import { render, screen } from '@testing-library/react';

import Title from 'src/products/components/Title';

describe('Title component', () => {
  const givenTitle = 'Shine Tomato';

  it('should renders given text', () => {
    render(<Title>{givenTitle}</Title>);

    expect(
      screen.getByText(givenTitle),
    ).toBeInTheDocument();
  });
});
