export type ID = number;
export type Image = {
  src: string;
  alt?: string;
};
export type Name = {
  main: string;
  sub: string;
};
export type Price = {
  original: number;
  sales: number;
  discountRate: number;
};
export type Summary = {
  salesUnit: string;
  weightCapacity: string;
  deliveryType: string;
  originCountry: string;
  packagingType: string;
  expirationDate: string;
  instructions: string[];
};
export type OrderLink = string;
