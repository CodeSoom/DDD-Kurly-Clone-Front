export default function SignUpGenderRadio() {
  return (
    <div>
      <p>
        <span>성별</span>
      </p>
      <div>
        <div>
          <label htmlFor="sign-up-man">남자</label>
          <input type="radio" id="sign-up-man" name="sign-up-gender" />
        </div>
        <div>
          <label htmlFor="sign-up-women">여자</label>
          <input type="radio" id="sign-up-women" name="sign-up-gender" />
        </div>
        <div>
          <label htmlFor="sign-up-anything">선택안함</label>
          <input type="radio" id="sign-up-anything" name="sign-up-gender" checked />
        </div>
      </div>
    </div>
  );
}
