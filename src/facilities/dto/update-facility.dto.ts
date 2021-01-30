import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { FacilityStatus } from '../create-facility-status.enum';

export class UpdateFacilityDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'MG Road,Delhi' })
  @IsOptional()
  address: any;

  @ApiProperty({ example: 682018 })
  @IsOptional()
  pincode: number;

  @ApiProperty({
    example: 'The place is 10kms from city and is open till 5pm.',
  })
  @IsOptional()
  description: string;

  @IsOptional()
  @ApiProperty({ example: '-75.23' })
  latitude: string;

  @ApiProperty({ example: '-75.89' })
  @IsOptional()
  longitude: string;

  @ApiProperty({ example: '8129210496' })
  @IsOptional()
  mobile: number;

  @ApiProperty({ example: 'https://www.xyz.com/test.png' })
  @IsOptional()
  imageUrl: any;

  @ApiProperty({ example: 'OPEN|CLOSE|IN_ACTIVE' })
  @IsOptional()
  status: FacilityStatus;
}
