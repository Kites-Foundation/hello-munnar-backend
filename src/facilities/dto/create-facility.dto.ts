import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { FacilityStatus } from '../create-facility-status.enum';

export class CreateFacilityDto {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  typeId: number;

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

  @ApiProperty({ example: 1234567890 })
  mobile: number;

  @ApiProperty({ example: 'https://www.xyz.com/test.png' })
  imageUrl: any;

  @ApiProperty({ example: 'OPEN:1||IN_ACTIVE:2||CLOSE:3' })
  @IsIn([FacilityStatus.OPEN, FacilityStatus.IN_ACTIVE, FacilityStatus.CLOSED])
  status: FacilityStatus;
}
