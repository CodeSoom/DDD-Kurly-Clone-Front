import Image from 'next/image';
import Link from 'next/link';

export default function Product() {
  return (
    <>
      <Image
        src="/image/sample_product.jpeg"
        alt="샤인마토 이미지"
        width={430}
        height={552}
      />
      <h2>샤인마토 500g</h2>
      <h3>설탕 없이도 달달함을 머금은 방울토마토</h3>

      <dl>
        <dt style={{ fontSize: 0 }}>판매가격</dt>
        <dd>
          {(7_979).toLocaleString()}
          <small>원</small>
        </dd>

        <dt style={{ fontSize: 0 }}>할인율</dt>
        <dd>1%</dd>

        <dt style={{ fontSize: 0 }}>원래 가격</dt>
        <dd>
          <del>
            {(7_980).toLocaleString()}
            <small>원</small>
          </del>
        </dd>
      </dl>

      <dl>
        <dt>판매단위</dt>
        <dd>1팩</dd>

        <dt>중량/용량</dt>
        <dd>500g</dd>

        <dt>배송구분</dt>
        <dd>샛별배송/택배배송</dd>

        <dt>원산지</dt>
        <dd>토마토(국산)</dd>

        <dt>포장타입</dt>
        <dd>냉장/종이포장</dd>

        <dt>유통기한</dt>
        <dd>상품 별도 표기/최소 2일이상 남은 상품으로 배송 드립니다.</dd>

        <dt>안내사항</dt>
        <dd>
          <p>
            - 샤인마토는 스테비오사이드 처리 가공을 하기때문에 시즌에 따라 크기와 색깔이 시즌에 따라 조금씩 차이가 날 수 있습니다.
            녹색빛이 돌아도 정상이오니 안심하고 섭취 부탁드립니다.
          </p>
          <p>
            - 꼭 냉장보관을 권장 드립니다. 절대 실온 보관하지 말아주세요.
          </p>
          <p>
            - 신선식품으로 3% 정도의 중량오차가 발생할 수 있습니다.
          </p>
        </dd>
      </dl>

      <Link href="/order">주문 하러가기</Link>
    </>
  );
}
