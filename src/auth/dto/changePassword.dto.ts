import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'Current Password',
    type: 'string',
    example: 'AZDq-49.orAZWN',
  })
  @IsString()
  readonly currentPassword: string;

  @ApiProperty({
    description: 'New Password',
    type: 'string',
    example: 'asAZDq-49.orAZWN',
  })
  @IsString()
  @MinLength(14)
  @MaxLength(128)
  @Matches(/^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[!@#$%^&*]).{14,}$/, {
    message: 'Password too Weak',
  })
  readonly password: string;

  @ApiProperty({
    description: 'Confirm password',
    type: 'string',
    example: 'asAZDq-49.orAZWN',
  })
  @IsString()
  @MinLength(14)
  @MaxLength(128)
  @Matches(/^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[!@#$%^&*]).{14,}$/, {
    message: 'Password too Weak',
  })
  readonly confirm: string;
}
