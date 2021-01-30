import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateFacilityStatus } from '../create-facility-status.enum';

export class UpdateFacilityDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'megha arcade,power house road' })
  @IsNotEmpty()
  address: any;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  pincode: number;

  @ApiProperty({ type: 'string' })
  description: string;

  @ApiProperty({ type: 'string' })
  latitude: string;

  @ApiProperty({ type: 'string' })
  longitude: string;

  @ApiProperty({ type: 'string' })
  contact: string;

  @ApiProperty({ example: 'https://www.xyz.com/test.png' })
  imageUrl: string;

  @ApiProperty({ example: 'Status:OPEN,CLOSE,IN_ACTIVE' })
  status: CreateFacilityStatus;
}
