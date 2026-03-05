// export enum OrderStatus {
//   PENDING = 'PENDING',
//   PAID = 'PAID',
//   DELIVERED = 'DELIVERED',
//   CANCELED = 'CANCELED',
// }
import { OrderStatus } from 'src/generated/prisma/enums';

export const OrderStatusList = [
  OrderStatus.PENDING,
  OrderStatus.PAID,
  OrderStatus.DELIVERED,
  OrderStatus.CANCELED,
];
