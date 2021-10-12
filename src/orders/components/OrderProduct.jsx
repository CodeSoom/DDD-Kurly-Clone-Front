import Link from 'next/link';

export default function OrderProduct({ product, onClick }) {
  const { name, price, quantity } = product;

  return (
    <>
      <dl>
        <dd>
          상품명:
        </dd>
        <dt>
          {name}
        </dt>

        <dd>
          가격:
        </dd>
        <dt>
          {price}
          {' '}
          원
        </dt>

        <dd>
          수량:
        </dd>
        <dt>
          {quantity}
          {' '}
          개
        </dt>
      </dl>

      <p>
        결제 예정 금액:
        {' '}
        {price}
        {' '}
        원
      </p>

      <button
        type="button"
        onClick={onClick}
      >
        <Link href="/">
          주문 하기
        </Link>
      </button>
    </>
  );
}
