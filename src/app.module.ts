import { Module } from '@nestjs/common'
import { ProductsModule } from './products/products.module'
import { OrdersModule } from './orders/orders.module'

@Module({
  imports: [ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
