import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common/dtos/pagination.dto";
import { OrderStatus, OrderStatusList } from "../enum/order.enuum";

export class PaginationOrderDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Valid status are: ${OrderStatusList.join(', ')}`
  })
  status: OrderStatus;
}