import { BadRequestException, PipeTransform } from '@nestjs/common';
import { FacilityStatus } from './../create-facility-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    FacilityStatus.OPEN,
    FacilityStatus.IN_ACTIVE,
    FacilityStatus.CLOSED,
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
