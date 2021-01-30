
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateStatusDto {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsOptional()
  status: number ;
 }
