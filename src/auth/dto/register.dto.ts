import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export default class RegisterDTO {
  @ApiProperty({ example: 'Kites Foundation', description: 'Full Name' })
  readonly name: string;

  @ApiProperty({
    description: 'Email address',
    type: 'string',
    example: 'info@kitesfoundation.org',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description:
      ' Password with Minimum 1 symbol , Uppercase and Lowecase Characters,' +
      ' number with minimum length of 14 characters',
    type: 'string',
    example: 'AZDq-49.orAZWN',
  })
  @IsString()
  @MinLength(14)
  @MaxLength(128)
  readonly password: string;

  @ApiProperty({
    description:
      ' Password with Minimum 1 symbol ,' +
      ' number with minimum length of 14 characters',
    type: 'string',
    example: 'AZDq-49.orAZWN',
  })
  @IsString()
  readonly confirm: string;

  @ApiProperty({
    required: false,
    example: '38418417249124gj1h2f48172t412841g2478',
    description: 'Token for password reset',
  })
  @IsOptional()
  @IsString()
  readonly token: string;
}
