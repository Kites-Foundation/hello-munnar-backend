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

    @ApiProperty({description: 'destination',
    type: 'string',
    example: 'destination',})
    readonly destination: string;

    @ApiProperty({description: 'Description',
    type: 'string',
    example: 'Describe the activity',})
    readonly description: string;
    
    @ApiProperty({description: 'cost',
    type: 'string',
    example: 'cost',})
    readonly cost: string;

    @ApiProperty({description: 'status',
    type: 'string',
    example: 'status',})
    readonly status: string;

    @ApiProperty({description: 'Time Range',
    type: 'string',
    example: '',})
    readonly timeRange: string;

    @ApiProperty({description: 'booking url',
    type: 'string',
    example: '',})
    readonly bookingUrl: string;

    @ApiProperty({description: 'imageUrl',
    type: 'string',
    example: '',})
    readonly imageUrl: string;

}
