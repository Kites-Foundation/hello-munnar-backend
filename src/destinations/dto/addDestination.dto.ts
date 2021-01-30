import {IsNotEmpty,IsOptional, IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class AddDestinationDto{
    @ApiProperty({ example:null })
    @IsString() 
    @IsNotEmpty()
    name:string;

    @ApiProperty({ example:null})
    @IsOptional()
    latitude:string;

    @ApiProperty({ example:null})
    longitude:string;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    Description:string;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    type:number;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    route:number;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    imageUrl: any;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    currentTemperature: string;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    bestTime: string;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    bestMonth: string;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    tags: string;

    @ApiProperty({ example:null})
    @IsNotEmpty()
    status: string;

    @ApiProperty({ example:null})
    reviews: any;

    @ApiProperty({ example:null})
    activities: number;
}