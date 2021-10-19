import { render, screen } from '@testing-library/react';

import SignUpTermsAndConditions from '.';

describe('SignUpTermsAndConditions', () => {
  it('renders title', () => {
    render(<SignUpTermsAndConditions />);

    expect(screen.getByText('이용약관동의')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders labels', () => {
    render(<SignUpTermsAndConditions />);

    expect(screen.getByLabelText('전체 동의합니다.')).toBeInTheDocument();
    expect(screen.getByText('선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.')).toBeInTheDocument();

    expect(screen.getByLabelText('이용약관 동의(필수)')).toBeInTheDocument();

    expect(screen.getByLabelText('개인정보 수집﹒이용 동의(필수)')).toBeInTheDocument();

    expect(screen.getByLabelText('개인정보 수집﹒이용 동의(선택)')).toBeInTheDocument();

    expect(screen.getByLabelText('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')).toBeInTheDocument();

    expect(screen.getByLabelText('SNS')).toBeInTheDocument();
    expect(screen.getByLabelText('이메일')).toBeInTheDocument();

    expect(screen.getByLabelText('본인은 만 14세 이상입니다.(필수)')).toBeInTheDocument();
  });
});
