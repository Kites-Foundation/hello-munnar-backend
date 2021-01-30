import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class updateTypeDTO {
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
