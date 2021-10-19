import { render, screen } from '@testing-library/react';

import SignUpBasicInput from '.';

describe('SignUpBasicInput', () => {
  function renderSignUpBasicInput() {
    return render(
      <SignUpBasicInput
        title="아이디"
        required
        placeholder="아이디를 입력해주세요."
        name="sign-up-id"
        pattern="[0-9]*"
        component={<button type="button">중복확인</button>}
      />,
    );
  }

  it('renders title', () => {
    renderSignUpBasicInput();

    expect(screen.getByText('아이디')).toBeInTheDocument();
  });

  it('renders button', () => {
    renderSignUpBasicInput();

    expect(screen.getByRole('button', { name: '중복확인' })).toBeInTheDocument();
  });
});
