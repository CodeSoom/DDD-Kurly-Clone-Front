import { render, screen, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const loginForm = {
    id: 'codesoomer',
    password: 'codesoomer-password',
  };

  const handleChangeField = jest.fn();
  const handleSubmitForm = jest.fn();

  function renderLoginForm() {
    return render(
      <LoginForm
        loginForm={loginForm}
        onChange={handleChangeField}
        onSubmit={handleSubmitForm}
      />,
    );
  }

  it('renders LoginForm', () => {
    renderLoginForm();

    expect(screen.getAllByText('로그인')[0]).toBeInTheDocument();
    expect(screen.getByText('회원가입')).toBeInTheDocument();
  });

  it('listens the change event', () => {
    renderLoginForm();

    fireEvent.change(screen.getByTestId('login-id'), {
      target: {
        name: 'id',
        value: 'newCodesoomer',
      },
    });

    fireEvent.change(screen.getByTestId('login-password'), {
      target: {
        name: 'password',
        value: 'codesoomer-newPassword',
      },
    });

    expect(handleChangeField).toBeCalledTimes(2);
  });

  it('listens the click event', () => {
    renderLoginForm();

    fireEvent.click(screen.getByRole('button', {
      name: '로그인',
    }));

    expect(handleSubmitForm).toBeCalledTimes(1);
  });
});
