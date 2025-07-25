import { IsEnum, IsOptional } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enum/order.enuum";

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList.join(', ')}`
  })
  status: OrderStatus;
}