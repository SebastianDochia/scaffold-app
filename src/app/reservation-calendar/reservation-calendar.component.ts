import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

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
export class ReservationCalendarComponent {
  @Input() styleConfig: StyleConfig = DEFAULT_STYLE_CONFIG;
  @Input() systemConfig: SystemConfig = DEFAULT_SYSTEM_CONFIG;

  selected: Date | null = null;

  constructor() { }

  dateFilter = (d: Date | null): boolean => {
    const activeFilters = this.systemConfig.dateFilers;

    return new FilterWeekends().shouldBeSelectable(d) &&
      new FilterSpecificDates(activeFilters.filterSpecificDates).shouldBeSelectable(d) &&
      new FilterSpecificDatesEveryYear(activeFilters.filterSpecificDatesEveryYear).shouldBeSelectable(d);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'red-date' : '';
    }

    return '';
  }

  onSelectDateTime(dateTime: Date) {
    this.selected = dateTime;
    console.log(this.selected);
  }
}
