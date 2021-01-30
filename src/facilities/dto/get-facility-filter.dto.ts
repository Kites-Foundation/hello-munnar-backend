import { IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class GetFacilitesFilterDto {
  @ApiProperty({ example: 'garden' })
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
