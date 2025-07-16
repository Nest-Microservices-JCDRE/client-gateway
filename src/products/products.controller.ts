import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'Product created successfully'
  }

  @Get()
  findAllProducts() {
    return 'List of all products'
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
