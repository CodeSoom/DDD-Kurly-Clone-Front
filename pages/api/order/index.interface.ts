import {
  ORDER_ID,
  PRODUCT_ID,
  Items,
  Coupons,
  Member,
  CreatedAt,
  DeliveryStatus,
  TotalCost,
  DeliveryInfo,
} from 'pages/api/order/index.type';

export interface Order {
  id: ORDER_ID;
  items: Items;
  Member: Member;
  Coupon: Coupons;
  deliveryInfo: DeliveryInfo,
}

export interface OrderHistory{
  id: ORDER_ID;
  productId: PRODUCT_ID;
  totalCost: TotalCost;
  createdAt: CreatedAt;
  deliveryStatus: DeliveryStatus,
}

export default Order;
