export default function SignUpAdditionalRadio() {
  return (
    <div>
      <p>
        <span>추가입력 사항</span>
      </p>
      <div>
        <div>
          <label htmlFor="sign-up-recommended-person">추천인 아이디</label>
          <input
            type="radio"
            id="sign-up-recommended-person"
            name="sign-up-additional"
          />
        </div>
        <div>
          <label htmlFor="sign-up-event-name">참여 이벤트명</label>
          <input
            type="radio"
            id="sign-up-event-name"
            name="sign-up-additional"
          />
        </div>
      </div>
    </div>
  );
}
