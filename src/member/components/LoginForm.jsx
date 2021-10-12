import Link from 'next/link';

export default function LoginForm() {
  const loginForm = {
    id: 'codesoomer',
    password: 'codesoomer-password',
  };

  const handleChangeField = () => {
    // TODO : slice 구현 후 필요한 로직 추가 예정
  };

  const handleSubmitLoginForm = () => {
    // TODO : slice 구현 후 필요한 로직 추가  및 메인페이지 완성 후 메인 페이지로 넘어가게 구현하기
  };

  return (
    <fieldset>
      <input
        data-testid="login-id"
        id="input-id"
        type="text"
        name="id"
        value={loginForm.id}
        onChange={handleChangeField}
        aria-label="id"
        placeholder="아이디를 입력해주세요"
      />
      <input
        id="input-password"
        type="password"
        name="password"
        value={loginForm.password}
        onChange={handleChangeField}
        aria-label="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <button type="button" onClick={handleSubmitLoginForm}>로그인</button>
      <Link href="/signup">회원가입</Link>
    </fieldset>
  );
}
