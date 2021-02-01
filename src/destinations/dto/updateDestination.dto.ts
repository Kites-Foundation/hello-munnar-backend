import {IsNotEmpty,IsOptional} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class updateDestinationDto{
    
    @ApiProperty({ example:"id" })
    @IsNotEmpty()
    id:number;

    @ApiProperty({ example:"town" })
    @IsNotEmpty()
    name:string;

    @ApiProperty({ example:"125.25411"})
    @IsOptional()
    latitude:string;

    @ApiProperty({ example:"125.25411"})
    longitude:string;

    @ApiProperty({ example:"Town"})
    @IsNotEmpty()
    description:string;
    
    @ApiProperty({ example:"3"})
    @IsNotEmpty()
    type:number;

    @ApiProperty({ example:"7"})
    @IsNotEmpty()
    route:number;

    @ApiProperty({ example:null})
    @IsOptional()
    image_url: any;

    @ApiProperty({ example:"30"})
    @IsNotEmpty()
    current_temperature: string;

    @ApiProperty({ example:"321"})
    @IsNotEmpty()
    best_time: string;

    @ApiProperty({ example:"32"})
    @IsNotEmpty()
    best_month: string;

    @ApiProperty({ example:"ad"})
    @IsNotEmpty()
    tags: string;

    @ApiProperty({ example:"ad"})
    @IsNotEmpty()
    status: string;

    @ApiProperty({ example:null})
    @IsOptional()
    reviews: any;

    @ApiProperty({ example:null})
    activities: number;
}