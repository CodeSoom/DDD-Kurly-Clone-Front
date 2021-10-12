import LoginForm from '../src/member/components/LoginForm';

export default function LoginPage() {
  const loginForm = {
    id: 'codesoomer',
    password: 'codesoomer-password',
  };

  const handleChangeField = () => {
    // TODO : slice 구현 후 필요한 로직 추가 예정
  };

  const handleSubmitForm = () => {
    // TODO : slice 구현 후 필요한 로직 추가  및 메인페이지 완성 후 메인 페이지로 넘어가게 구현하기
  };

  return (
    <>
      <h2>로그인</h2>
      <LoginForm
        loginForm={loginForm}
        onChange={handleChangeField}
        onSubmit={handleSubmitForm}
      />
    </>
  );
}
