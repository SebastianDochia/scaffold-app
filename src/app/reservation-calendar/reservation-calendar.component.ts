import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import {
  DEFAULT_DATE_FILTER,
} from 'src/app/reservation-calendar/constants/default-date-filter';
import {
  DEFAULT_STYLE_CONFIG,
} from 'src/app/reservation-calendar/constants/default-style-config';
import {
  DEFAULT_SYSTEM_CONFIG,
} from 'src/app/reservation-calendar/constants/default-system-config';
import {
  FilterSpecificDates,
} from 'src/app/reservation-calendar/date-filters/filter-specific-dates';
import {
  FilterSpecificDatesEveryYear,
} from 'src/app/reservation-calendar/date-filters/filter-specific-dates-every-year';
import {
  FilterWeekends,
} from 'src/app/reservation-calendar/date-filters/filter-weekends';
import { DateFilters } from 'src/app/reservation-calendar/models/date-filters';
import { StyleConfig } from 'src/app/reservation-calendar/models/style-config';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationCalendarComponent implements OnInit {
  @Input() styleConfig: StyleConfig = DEFAULT_STYLE_CONFIG;
  @Input() systemConfig: SystemConfig = DEFAULT_SYSTEM_CONFIG;
  @Input() dateFilers: DateFilters = DEFAULT_DATE_FILTER;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  selected: Date | null = null;

  constructor() {
    const currentYear = new Date().getFullYear();
    const today = new Date();

    this.minDate = new Date(today);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  dateFilter = (d: Date | null): boolean => {
    return new FilterWeekends().shouldBeSelectable(d) &&
      new FilterSpecificDates(this.dateFilers.filterSpecificDates).shouldBeSelectable(d) &&
      new FilterSpecificDatesEveryYear(this.dateFilers.filterSpecificDatesEveryYear).shouldBeSelectable(d);
  }

  ngOnInit() {
  }
}
