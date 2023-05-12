import {
  BusinessHours,
} from 'src/app/reservation-calendar/models/business-hours';
import { DateFilters } from 'src/app/reservation-calendar/models/date-filters';

export interface SystemConfig {
  selectDateMessage: string,
  dateFilters: DateFilters,
  hours: BusinessHours,
  minDate: Date,
  maxDate: Date,
}
