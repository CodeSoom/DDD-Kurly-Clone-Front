import LoginForm from './LoginForm';

import { useAppDispatch, useAppSelector } from '../../common/hooks';

import {
  changeLoginField,
  login,
} from '../slice';

import { get } from '../../common/utils';

export default function LoginPage() {
  const dispatch = useAppDispatch();

  const loginFields = useAppSelector(get('loginFields'));

  const handleChangeField = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmitForm = () => {
    dispatch(login());

    // TODO : slice 구현 후 필요한 로직 추가  및 메인페이지 완성 후 메인 페이지로 넘어가게 구현하기
  };

  return (
    <>
      <h2>로그인</h2>
      <LoginForm
        loginForm={loginFields}
        onChange={handleChangeField}
        onSubmit={handleSubmitForm}
      />
    </>
  );
}
