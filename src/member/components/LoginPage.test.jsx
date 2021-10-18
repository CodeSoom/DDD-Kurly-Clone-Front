import { render, screen, fireEvent } from '@testing-library/react';

import { useAppDispatch, useAppSelector } from '../../common/hooks';

import LoginPage from './LoginPage';

import {
  changeLoginField,
} from '../slice';

jest.mock('../../common/hooks');

test('LoginPage', () => {
  const loginFields = {
    id: 'newCodesoomer',
    password: 'codesoomer-newPassword',
  };

  const dispatch = jest.fn();

  useAppDispatch.mockImplementation(() => dispatch);

  useAppSelector.mockImplementation((selector) => selector({
    loginFields: null,
  }));

  render(<LoginPage />);

  fireEvent.click(screen.getByRole('button', {
    name: '로그인',
  }));

  expect(dispatch).toBeCalledTimes(1);

  fireEvent.change(screen.getByTestId('login-id'), {
    target: {
      name: 'id',
      value: 'newCodesoomer',
    },
  });

  expect(dispatch).toBeCalledWith(changeLoginField({ name: 'id', value: loginFields.id }));

  fireEvent.change(screen.getByTestId('login-password'), {
    target: {
      name: 'password',
      value: 'codesoomer-newPassword',
    },
  });

  expect(dispatch).toBeCalledWith(changeLoginField({ name: 'password', value: loginFields.password }));
});
