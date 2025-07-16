import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { PRODUCT_SERVICE } from 'src/config'

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'Product created successfully'
  }

  @Get()
  findAllProducts() {
    return this.productsClient.send({ cmd: 'find_all_products' }, {})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'Find one product with id: ' + id
  }

  @Patch(':id')
  patchProduct(@Param('id') id: string, @Body() body: any) {
    return 'Update product with id: ' + id
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Delete product with id: ' + id
  }
}
