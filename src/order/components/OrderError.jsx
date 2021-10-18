import Link from 'next/link';

export default function OrderError() {
  return (
    <>
      <h2>
        주문 과정 중 오류가 발생했습니다.
      </h2>
      <Link href="/">
        상품 목록으로 돌아가기
      </Link>
    </>
  );
}
