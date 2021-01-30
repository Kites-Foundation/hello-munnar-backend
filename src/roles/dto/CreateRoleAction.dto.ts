import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleActionDto {
  @ApiProperty({ example: null })
  readonly roleId: number;

  @ApiProperty({ example: null })
  readonly method: string;

  @ApiProperty({ example: null })
  readonly path: string;

  @ApiProperty({ example: null })
  readonly createdBy: number;

  @ApiProperty({ example: null })
  readonly status: string;
}
