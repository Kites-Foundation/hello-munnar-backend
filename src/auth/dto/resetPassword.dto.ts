import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({
    description: 'Token',
    type: 'string',
    example: '234871234j1hv4ju12v41vj24j1v24',
  })
  token: string;

  @ApiProperty({
    description: 'New Password',
    type: 'string',
    example: 'asAZDq-49.orAZWN',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(49)
  @Matches(/^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[!@#$%^&*]).{8,}$/, {
    message: 'Password too Weak',
  })
  readonly password: string;

  @ApiProperty({
    description: 'Confirm password',
    type: 'string',
    example: 'asAZDq-49.orAZWN',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(49)
  @Matches(/^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[!@#$%^&*]).{8,}$/, {
    message: 'Password too Weak',
  })
  readonly confirm: string;
}
