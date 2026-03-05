import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatusList } from './enum/order.enum';
import { OrderStatus } from 'src/generated/prisma/enums';

export class ChangeOrderStatusDto {
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList.join(', ')}`,
  })
  status: OrderStatus;
}
