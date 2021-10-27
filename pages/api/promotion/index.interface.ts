import {
  ID,
  DiscountType,
  CouponType,
} from 'pages/api/promotion/index.type';

/* 할인 */
export interface Discount {
  id: ID;
  type: DiscountType;
  value: number; // 할인율(정액 할인용), 할인금액(정률 할인용)
}

export interface ProductDiscount extends Discount {
  productId: ID;
}

/* 쿠폰 */
export interface Coupon {
  id: ID;
  name: string;
  descrtion: string;
  keyword: string;
  type: CouponType; // 마이 컬리 페이지에서 "기능"에 해당하는 Field
  discountId: ID;
  flatRate: number;
  targetCondition: string; // 마이 컬리 페이지에서 "사용조건"에 해당하는 Field (-> productId 로 수정될 수 있음)
  expiredAt: Date;
}

export interface MyCoupon {
  id: ID;
  couponId: ID;
  redeemedAt: null | Date; // 사용한 날짜, null일 경우, 미사용에 해당
}
