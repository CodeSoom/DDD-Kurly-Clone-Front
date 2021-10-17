/**
 * @typedef { import("pages/api/products/[id].interface").default } Data
 * @typedef { import("src/products/api").ProductDetailResponse } Response
 */

import Image from 'next/image';
import Link from 'next/link';
import Error from 'next/error';
import { getProductDetail } from 'src/products/api';

/**
 * @param { Object } props
 * @param { Response } props.res
 */
export default function Product({ res }) {
  if (res.status !== 200) {
    return <Error statusCode={res.status} />;
  }

  /** @type {{ data: Data }} */
  const { data } = res;

  return (
    <>
      <Image
        src={data.image.src}
        alt={data.image.alt}
        width={430}
        height={552}
      />
      <h2>
        {data.name.main}
      </h2>
      <h3>
        {data.name.sub}
      </h3>

      <dl>
        <dt style={{ fontSize: 0 }}>
          판매가격
        </dt>
        <dd>
          {data.price.sales.toLocaleString()}
          <small>
            원
          </small>
        </dd>

        <dt style={{ fontSize: 0 }}>
          할인율
        </dt>
        <dd>
          {data.price.discountRate}
          %
        </dd>

        <dt style={{ fontSize: 0 }}>원래 가격</dt>
        <dd>
          <del>
            {data.price.original.toLocaleString()}
            <small>
              원
            </small>
          </del>
        </dd>
      </dl>

      <dl>
        <dt>
          판매단위
        </dt>
        <dd>
          {data.summary.salesUnit}
        </dd>

        <dt>
          중량/용량
        </dt>
        <dd>
          {data.summary.weightCapacity}
        </dd>

        <dt>
          배송구분
        </dt>
        <dd>
          {data.summary.deliveryType}
        </dd>

        <dt>
          원산지
        </dt>
        <dd>
          {data.summary.originCountry}
        </dd>

        <dt>
          포장타입
        </dt>
        <dd>
          {data.summary.packagingType}
        </dd>

        <dt>
          유통기한
        </dt>
        <dd>
          {data.summary.expirationDate}
        </dd>

        <dt>
          안내사항
        </dt>
        <dd>
          {
            data.summary.instructions.map((instruction) => (
              <p key={instruction}>
                {instruction}
              </p>
            ))
          }
        </dd>
      </dl>

      <Link href={data.orderLink}>주문 하러가기</Link>
    </>
  );
}

/**
 * @param { Object } ctx
 * @param { Object } ctx.params
 * @param { string } ctx.params.id
 *
 * @returns { Promise<{ res: Response }> }
 */
export async function getServerSideProps({ params: { id } }) {
  const ID = Number(id);
  if (Number.isNaN(ID)) {
    return {
      props: {
        res: {
          status: 404,
          data: {},
        },
      },
    };
  }

  const res = await getProductDetail(ID);

  return {
    props: {
      res,
    },
  };
}
