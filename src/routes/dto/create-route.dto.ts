import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRouteDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  routeName: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: ['https://www.example.com/test.png'] })
  @IsOptional()
  imageUrl: any;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  destination: string;

  @ApiProperty({ example: 'OPEN:1||CLOSE:2' })
  @IsNotEmpty()
  status: number;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  totalDistance: number;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  rating: number;
}
