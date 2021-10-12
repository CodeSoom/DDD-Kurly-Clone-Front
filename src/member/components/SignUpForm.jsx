export default function SignUpForm() {
  return (
    <div>
      {/* 아이디 */}
      <div>
        <p>
          <span>아이디</span>
          <span>*</span>
        </p>
        <input
          name="sign-up-id"
          type="text"
          placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
          required
        />
        <button type="button">중복확인</button>
      </div>
      {/* 비밀번호 */}
      <div>
        <p>
          <span>비밀번호</span>
          <span>*</span>
        </p>
        <input
          name="sign-up-password"
          type="text"
          placeholder="비밀번호를 입력해주세요"
          required
        />
      </div>
      {/* 비밀번호 확인 */}
      <div>
        <p>
          <span>비밀번호 확인</span>
          <span>*</span>
        </p>
        <input
          name="sign-up-check-password"
          type="text"
          placeholder="비밀번호를 한번 더 입력해주세요"
          required
        />
      </div>
      {/* 이름 */}
      <div>
        <p>
          <span>이름</span>
          <span>*</span>
        </p>
        <input
          name="sign-up-name"
          type="text"
          placeholder="이름을 입력해주세요"
          required
        />
      </div>
      {/* 이메일 */}
      <div>
        <p>
          <span>이메일</span>
          <span>*</span>
        </p>
        <input
          name="sign-up-email"
          type="text"
          placeholder="예: marketkurly@kurly.com"
          required
        />
        <button type="button">중복확인</button>
      </div>
      {/* 휴대폰 */}
      <div>
        <p>
          <span>휴대폰</span>
          <span>*</span>
        </p>
        <input
          name="sign-up-phone-number"
          type="text"
          placeholder="숫자만 입력해주세요"
          pattern="[0-9]*"
          required
        />
        <button type="button">인증번호 받기</button>
      </div>
      {/* 주소 */}
      <div>
        <p>
          <span>주소</span>
          <span>*</span>
        </p>
        <button type="button">인증번호 받기</button>
        <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
      </div>
      {/* 성별 */}
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
      {/* 생년월일 */}
      <div>
        <p>
          <span>생년월일</span>
        </p>
        <div>
          <input
            type="text"
            name="sign-up-birth-year"
            pattern="[0-9]*"
            size="4"
            maxLength="4"
            placeholder="YYYY"
          />
          <input
            type="text"
            name="sign-up-birth-month"
            pattern="[0-9]*"
            size="2"
            maxLength="2"
            placeholder="MM"
          />
          <input
            type="text"
            name="sign-up-birth-day"
            pattern="[0-9]*"
            size="2"
            maxLength="2"
            placeholder="DD"
          />
        </div>
      </div>
      {/* 추가입력 사항 */}
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
      {/* 이용약관 동의 */}
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
          <input type="checkbox" id="sign-up-private2-agree" name="sign-up-private2-agree" />
        </div>
        {/* 무료배송, 할인쿠폰 등 혜택/정보 수신 동의 */}
        <div>
          <label htmlFor="sign-up-check-marketing-agree">
            <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
            <span>(선택)</span>
          </label>
          <input type="checkbox" id="sign-up-marketing-agree" name="sign-up-marketing-agree" />
          <div>
            {/* SNS */}
            <div>
              <label htmlFor="sign-up-check-sns-agree">SMS</label>
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
      {/* 가입하기 버튼 */}
      <button type="button">가입하기</button>
    </div>
  );
}
