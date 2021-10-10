import { render, screen } from '@testing-library/react';

import DeliveryClassification from 'src/products/components/ProductSummary/DeliveryClassification';

describe('DeliveryClassification component', () => {
  const givenDeliveryClassification = 'New star delivery / Parcel delivery';

  it('should renders given text', () => {
    render(<DeliveryClassification>{givenDeliveryClassification}</DeliveryClassification>);

    expect(
      screen.getByText(givenDeliveryClassification),
    ).toBeInTheDocument();
  });
});
