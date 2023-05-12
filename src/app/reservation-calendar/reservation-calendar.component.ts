import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatCalendar,
  MatCalendarCellClassFunction,
} from '@angular/material/datepicker';

import { BehaviorSubject } from 'rxjs';
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
})
export class ReservationCalendarComponent implements OnInit {
  @ViewChild('calendar') calendar!: MatCalendar<Date>;

  @Input() styleConfig: StyleConfig = DEFAULT_STYLE_CONFIG;
  @Input() systemConfig: BehaviorSubject<SystemConfig> = new BehaviorSubject(DEFAULT_SYSTEM_CONFIG);

  dateFilter: (d: Date | null) => boolean = () => true;

  selected: Date | null = null;

  constructor() { }

  ngOnInit(): void {
    this.systemConfig.subscribe((value: SystemConfig) => {
      this.dateFilter = (d: Date | null): boolean => {
        const activeFilters = value.dateFilters;

        return new FilterWeekends().shouldBeSelectable(d) &&
          new FilterSpecificDates(activeFilters.filterSpecificDates).shouldBeSelectable(d) &&
          new FilterSpecificDatesEveryYear(activeFilters.filterSpecificDatesEveryYear).shouldBeSelectable(d);
      }

      if (this.calendar) {
        this.calendar.updateTodaysDate();
      }
    });
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
