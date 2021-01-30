import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: null })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: null })
  @IsString()
  readonly type: string;

  @ApiProperty({ example: null })
  @IsString()
  readonly description: string;
}
