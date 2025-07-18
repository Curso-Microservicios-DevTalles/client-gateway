import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// eslint-disable-next-line prettier/prettier
export class UpdateProductDto extends PartialType(CreateProductDto) { }
