import SignUpAddress from './SignUpAddress';
import SignUpAdditionalRadio from './SignUpAdditionalRadio';
import SignUpBasicInput from './SignUpBasicInput';
import SignUpBirthInput from './SignUpBirthInput';
import SignUpGenderRadio from './SignUpGenderRadio';
import SignUpTermsAndConditions from './SignUpTermsAndConditions';

export default function SignUpForm() {
  return (
    <div>
      <SignUpBasicInput
        title="아이디"
        name="sign-up-id"
        placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
        component={<button type="button">중복확인</button>}
        required
      />
      <SignUpBasicInput
        title="비밀번호"
        name="sign-up-password"
        placeholder="비밀번호를 입력해주세요"
        required
      />
      <SignUpBasicInput
        title="비밀번호 확인"
        name="sign-up-check-password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        required
      />
      <SignUpBasicInput
        title="이름"
        name="sign-up-name"
        placeholder="이름을 입력해주세요"
        required
      />
      <SignUpBasicInput
        title="이메일"
        name="sign-up-email"
        placeholder="예: marketkurly@kurly.com"
        component={<button type="button">중복확인</button>}
        required
      />
      <SignUpBasicInput
        title="휴대폰"
        name="sign-up-phone-number"
        pattern="[0-9]*"
        placeholder="숫자만 입력해주세요"
        component={<button type="button">인증번호 받기</button>}
        required
      />
      <SignUpAddress />
      <SignUpGenderRadio />
      <SignUpBirthInput />
      <SignUpAdditionalRadio />
      <SignUpTermsAndConditions />
      <button type="button">가입하기</button>
    </div>
  );
}
