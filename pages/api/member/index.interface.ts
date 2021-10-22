import {
  ID,
  Name,
  Contact,
  Orders,
  Coupons,
} from 'pages/api/member/index.type';

export interface Member {
  id: ID;
  name: Name;
  contact: Contact;
  orders: Orders;
  coupons: Coupons;
}

export default Member;
