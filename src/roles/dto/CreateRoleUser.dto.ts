import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateRoleUserDto {
  @ApiProperty({ example: null })
  @IsNumber()
  readonly roleId: number;

  @ApiProperty({ example: null })
  @IsString()
  readonly type: string;

  @ApiProperty({ example: null })
  @IsNumber()
  readonly userId: number;
}