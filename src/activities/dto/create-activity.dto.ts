import { IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class CreateActivityDto {
    @ApiProperty({ default:null})
    @IsString()
    name:string;

}
