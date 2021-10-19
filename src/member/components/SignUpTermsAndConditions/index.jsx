export default function SignUpTermsAndConditions() {
  return (
    <div>
      <p>
        <span>이용약관동의</span>
        <span>*</span>
      </p>
      {/* 전체 동의 */}
      <div>
        <label htmlFor="sign-up-all-agree">전체 동의합니다.</label>
        <input type="checkbox" id="sign-up-all-agree" name="sign-up-all-agree" />
        <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
      </div>
      {/* 이용약관 동의 */}
      <div>
        <label htmlFor="sign-up-check-agree">
          <span>이용약관 동의</span>
          <span>(필수)</span>
        </label>
        <input type="checkbox" id="sign-up-check-agree" name="sign-up-check-agree" />
      </div>
      {/* 개인정보 수집﹒이용 동의(필수) */}
      <div>
        <label htmlFor="sign-up-check-private1-agree">
          <span>개인정보 수집﹒이용 동의</span>
          <span>(필수)</span>
        </label>
        <input type="checkbox" id="sign-up-check-private1-agree" name="sign-up-check-private1-agree" />
      </div>
      {/* 개인정보 수집﹒이용 동의(선택) */}
      <div>
        <label htmlFor="sign-up-check-private2-agree">
          <span>개인정보 수집﹒이용 동의</span>
          <span>(선택)</span>
        </label>
        <input type="checkbox" id="sign-up-check-private2-agree" name="sign-up-check-private2-agree" />
      </div>
      {/* 무료배송, 할인쿠폰 등 혜택/정보 수신 동의 */}
      <div>
        <label htmlFor="sign-up-check-marketing-agree">
          <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
          <span>(선택)</span>
        </label>
        <input type="checkbox" id="sign-up-check-marketing-agree" name="sign-up-check-marketing-agree" />
        <div>
          {/* SNS */}
          <div>
            <label htmlFor="sign-up-check-sns-agree">SNS</label>
            <input type="checkbox" id="sign-up-check-sns-agree" name="sign-up-check-sns-agree" />
          </div>
          <div>
            {/* 이메일 */}
            <label htmlFor="sign-up-all-agree">이메일</label>
            <input type="checkbox" id="sign-up-check-email-agree" name="sign-up-check-email-agree" />
          </div>
        </div>
      </div>
      {/* 본인은 만 14세 이상입니다.(필수) */}
      <div>
        <label htmlFor="sign-up-check-age">
          <span>본인은 만 14세 이상입니다.</span>
          <span>(필수)</span>
        </label>
        <input type="checkbox" id="sign-up-check-age" name="sign-up-check-age" />
      </div>
    </div>
  );
}
