import {
  BusinessHours,
} from 'src/app/reservation-calendar/models/business-hours';

export const DEFAULT_BUSINESS_HOURS: BusinessHours = {
  monday: [new Date(2023, 1, 15, 9, 0), new Date(2023, 1, 15, 10, 0), new Date(2023, 1, 15, 11, 0)],
  tuesday: [new Date(2023, 1, 15, 9, 0), new Date(2023, 1, 15, 10, 0), new Date(2023, 1, 15, 11, 0)],
  wednesday: [new Date(2023, 1, 15, 9, 0), new Date(2023, 1, 15, 10, 0), new Date(2023, 1, 15, 11, 0)],
  thursday: [new Date(2023, 1, 15, 9, 0), new Date(2023, 1, 15, 10, 0), new Date(2023, 1, 15, 11, 0)],
  friday: [new Date(2023, 1, 15, 9, 0)],
  saturday: [new Date(2023, 1, 15, 9, 0)],
  sunday: [new Date(2023, 1, 15, 9, 0)],
}
