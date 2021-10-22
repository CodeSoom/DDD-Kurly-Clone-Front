export type ORDER_ID = string;
export type PRODUCT_ID = string;

export type CreatedAt = Date;
export type DeliveryStatus = string;
export type TotalCost = number;

export type DestinationAddress = {
  zipCode: number;
  streetNameAddress: string;
}

export type ReceiverInfo = {
  name: string;
  phoneNumber: string;
}

export type DeliveryDetails = {
  receiverInfo: ReceiverInfo;
  placetoReceive: string;
  procedureofEntrace: string;
  timeToGetMsg: string;
}

export type DeliveryInfo = {
  destinationAddress: DestinationAddress;
  deliveryDetails: DeliveryDetails;
}

// TODO: Update Coupon Properties once promotion team implements.
export type Coupon = string;
export type Coupons = Coupon[];

// TODO: Update Item Properties once product team implements.
export type Item = string;
export type Items = Item[];

// TODO: Update Member Properties once member team implements.
export type Member = string;
