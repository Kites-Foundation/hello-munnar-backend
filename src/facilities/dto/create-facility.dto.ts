import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { CreateFacilityStatus } from '../create-facility-status.enum';

export class CreateFacilityDto {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  typeid: number;

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

  @ApiProperty({ example: 'http://www.google.com/arihant.png' })
  imageUrl: string;

  @ApiProperty({ example: 'OPEN|CLOSE|IN_ACTIVE' })
  @IsIn([
    CreateFacilityStatus.OPEN,
    CreateFacilityStatus.IN_ACTIVE,
    CreateFacilityStatus.CLOSED,
  ])
  status: CreateFacilityStatus;
}
