import {
  DEFAULT_BUSINESS_HOURS,
} from 'src/app/reservation-calendar/constants/default-business-hours';
import {
  DEFAULT_DATE_FILTER,
} from 'src/app/reservation-calendar/constants/default-date-filter';
import {
  DEFAULT_DATE_SELECT_MESSAGE,
} from 'src/app/reservation-calendar/constants/default-date-select-message';
import {
  DEFAULT_SPECIFIC_OPTIONS,
} from 'src/app/reservation-calendar/constants/default-system-options';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';

export const DEFAULT_SYSTEM_CONFIG: SystemConfig = {
  specificOptions: DEFAULT_SPECIFIC_OPTIONS,
  selectDateMessage: DEFAULT_DATE_SELECT_MESSAGE,
  dateFilters: DEFAULT_DATE_FILTER,
  hours: DEFAULT_BUSINESS_HOURS,
  minDate: new Date(),
  maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
};
