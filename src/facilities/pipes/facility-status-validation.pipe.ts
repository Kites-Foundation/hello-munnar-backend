import { BadRequestException, PipeTransform } from '@nestjs/common';
import { CreateFacilityStatus } from './../create-facility-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    CreateFacilityStatus.OPEN,
    CreateFacilityStatus.IN_ACTIVE,
    CreateFacilityStatus.CLOSED,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} type is not valid!!`);
    }
    return value;
  }
  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
