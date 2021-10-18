import Link from 'next/link';

export default function OrderComplete() {
  return (
    <>
      <h2>
        주문이 완료되었습니다.
      </h2>
      <Link href="/">
        쇼핑 계속하기
      </Link>
    </>
  );
}
