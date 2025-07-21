/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersController } from './orders.controller';
import { ORDER_SERVICE } from 'src/config/services';
import { envs } from 'src/config/envs';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      { name: ORDER_SERVICE, transport: Transport.TCP, options: { host: envs.ordersMicroserviceHost, port: envs.ordersMicroservicePort } },
    ]),
  ],
})
export class OrdersModule { }
