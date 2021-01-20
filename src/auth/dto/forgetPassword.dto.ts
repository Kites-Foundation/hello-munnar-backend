import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export default class ForgotPwdDTO {
  @ApiProperty({
    description: 'Email address',
    type: 'string',
    example: 'info@kitesfoundation.org',
  })
  @IsEmail()
  readonly email: string;
}
