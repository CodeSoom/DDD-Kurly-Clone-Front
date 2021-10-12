import { render, screen } from '@testing-library/react';

import SignUpForm from './SignUpForm';

describe('SignUpForm', () => {
  it('renders titles', () => {
    render(<SignUpForm />);

    expect(screen.getByText('아이디')).toBeInTheDocument();
    expect(screen.getByText('비밀번호')).toBeInTheDocument();
    expect(screen.getByText('비밀번호 확인')).toBeInTheDocument();
    expect(screen.getByText('이름')).toBeInTheDocument();
    expect(screen.getAllByText('이메일')[0]).toBeInTheDocument();
    expect(screen.getByText('휴대폰')).toBeInTheDocument();
    expect(screen.getByText('주소')).toBeInTheDocument();
    expect(screen.getByText('성별')).toBeInTheDocument();
    expect(screen.getByText('생년월일')).toBeInTheDocument();
    expect(screen.getByText('추가입력 사항')).toBeInTheDocument();
    expect(screen.getByText('이용약관동의')).toBeInTheDocument();
  });
});
