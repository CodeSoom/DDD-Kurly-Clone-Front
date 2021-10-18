import Link from 'next/link';

export default function LoginForm({
  loginForm,
  onChange,
  onSubmit,
}) {
  const handleChangeField = (event) => {
    const { name, value } = event.target;

    onChange({
      name,
      value,
    });
  };

  return (
    <fieldset>
      <input
        data-testid="login-id"
        id="input-id"
        type="text"
        name="id"
        value={loginForm?.id}
        onChange={handleChangeField}
        aria-label="id"
        placeholder="아이디를 입력해주세요"
      />
      <input
        data-testid="login-password"
        id="input-password"
        type="password"
        name="password"
        value={loginForm?.password}
        onChange={handleChangeField}
        aria-label="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <button type="button" onClick={onSubmit}>로그인</button>
      <Link href="/signup">회원가입</Link>
    </fieldset>
  );
}
