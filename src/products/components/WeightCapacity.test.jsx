import { render, screen } from '@testing-library/react';

import WeightCapacity from 'src/products/components/WeightCapacity';

describe('WeightCapacity component', () => {
  const givenWeightCapacity = '500g';

  it('should renders given text', () => {
    render(<WeightCapacity>{givenWeightCapacity}</WeightCapacity>);

    expect(
      screen.getByText(givenWeightCapacity),
    ).toBeInTheDocument();
  });
});
