import {
  BusinessHours,
} from 'src/app/reservation-calendar/models/business-hours';
import { DateFilters } from 'src/app/reservation-calendar/models/date-filters';
import {
  SpecificOptions,
} from 'src/app/reservation-calendar/models/specific-options';

export interface SystemConfig {
  specificOptions: SpecificOptions
  selectDateMessage: string,
  dateFilters: DateFilters,
  hours: BusinessHours,
  minDate: Date,
  maxDate: Date,
}
