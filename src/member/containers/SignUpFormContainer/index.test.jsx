import { render } from '@testing-library/react';

import SignUpFormContainer from './SignUpFormContainer';

describe('SignUpFormContainer', () => {
  it("doesn't crush", () => {
    render(<SignUpFormContainer />);
  });
});
