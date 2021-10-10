import { render, screen } from '@testing-library/react';

import Instructions from 'src/products/components/ProductSummary/Instructions';

describe('Instructions component', () => {
  const givenInstructions = `- Must Refrigerated.
- There may be a weight error of about 3%.`;

  it('should renders given text', () => {
    render(<Instructions>{givenInstructions}</Instructions>);

    givenInstructions.split('\n').forEach((value) => {
      expect(
        screen.getByText(new RegExp(value, 'i')),
      ).toBeInTheDocument();
    });
  });
});
