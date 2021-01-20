import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class LoginDTO {
  @ApiProperty({
    description: 'Email address',
    type: 'string',
    example: 'info@kitesfoundation.org',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description:
      ' Password with Minimum 1 symbol ,' +
      ' number with minimum length of 12 characters',
    type: 'string',
    example: 'AZDq-49.orAZWN',
  })
  @IsString()
  readonly password: string;
}
