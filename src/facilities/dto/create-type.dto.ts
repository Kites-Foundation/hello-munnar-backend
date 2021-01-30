import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty({ example: 'Entertainment' })
  @IsString()
  @IsNotEmpty()
  facilityType: string;
}
