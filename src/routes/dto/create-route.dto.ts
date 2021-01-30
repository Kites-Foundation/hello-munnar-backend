import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRouteDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  routeName: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  destination: string;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  totalDistance: number;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  review: number;
}
