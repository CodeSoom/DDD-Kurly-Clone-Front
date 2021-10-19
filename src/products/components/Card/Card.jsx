import Image from 'next/image';

export default function productCard({
  id = '48934',
  name = '샤인마토 500g',
  discountRate = 0,
  originalPrice = 7980,
  salesPrice = 7980,
  summary = '설탕 없이도 달달함을 머금은 방울토마토',
  kurlyOnly = true,
}) {
  const isDiscounted = discountRate !== 0;

  return (
    <a href={`/${id}`}>
      <Image
        src="/image/sample_product.jpeg"
        alt={`${name} 이미지`}
        width={338}
        height={435}
      />
      <dl>
        <dt>
          {name}
        </dt>
        {isDiscounted && (
          <dd>
            {discountRate}
            %
          </dd>
        )}
        <dd>
          {salesPrice.toLocaleString()}
          원
        </dd>
        {isDiscounted && (
          <dd
            style={{ textDecoration: 'line-through' }}
          >
            {originalPrice.toLocaleString()}
            원
          </dd>
        )}
        <dd>
          {summary}
        </dd>
        {kurlyOnly && (
          <dd>
            Kurly Only
          </dd>
        )}
      </dl>
    </a>
  );
}
