import { render, screen } from '@testing-library/react';

import SubTitle from 'src/products/components/SubTitle';

describe('SubTitle component', () => {
  const givenSubTitle = 'Very delicious cherry tomato without sugar';

  it('should renders given text', () => {
    render(<SubTitle>{givenSubTitle}</SubTitle>);

    expect(
      screen.getByText(givenSubTitle),
    ).toBeInTheDocument();
  });
});
