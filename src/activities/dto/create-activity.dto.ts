import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityDto {
    @ApiProperty({description: 'name',
    type: 'string',
    example: 'testname',})
    readonly name: string;

    @ApiProperty({description: 'type',
    type: 'string',
    example: 'trucking',})
    readonly type: string;

    @ApiProperty({description: 'Destination',
    type: 'string',
    example: 'random destination',})
    readonly destination: string;

    @ApiProperty({description: 'Description',
    type: 'string',
    example: 'Describe the activity',})
    readonly description: string;
    
    @ApiProperty({description: 'Time Range',
    type: 'string',
    example: '10AM-11PM',})
    readonly timeRange: string;

}
