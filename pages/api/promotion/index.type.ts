/* eslint-disable no-shadow */
export type ID = number;

export enum DiscountType {
  FlatRate = 'FLATRATE', // 예 : -10 %
  FlatAmount = 'FLATAMOUNT', // 예 : -1,000 원
}

export enum CouponType {
  Discount = 'DISCOUNT', // 마이 컬리 페이지에서 할인/적립 둘다 보이는데, "할인"만 구현할 것 같아서 일단 할인만 정의
}
