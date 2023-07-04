import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatCalendar,
  MatCalendarCellClassFunction,
} from '@angular/material/datepicker';

import {
  BehaviorSubject,
  Subject,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
import {
  ReservationData,
} from 'src/app/reservation-calendar/models/reservation-data';
import { StyleConfig } from 'src/app/reservation-calendar/models/style-config';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';
import {
  ReservationService,
} from 'src/app/reservation-calendar/services/reservation.service';

@Component({
  selector: 'rc-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('calendar') calendar!: MatCalendar<Date>;

  @Input() styleConfig: StyleConfig = DEFAULT_STYLE_CONFIG;
  @Input() systemConfig: BehaviorSubject<SystemConfig> = new BehaviorSubject(DEFAULT_SYSTEM_CONFIG);

  @Output() goBackEvent = new EventEmitter()

  dateFilter: (d: Date | null) => boolean = () => true;

  selected: Date | null = null;

  constructor(
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.systemConfig.pipe(takeUntil(this.destroy$)).subscribe((value: SystemConfig) => {
      this.dateFilter = (d: Date | null): boolean => {
        const activeFilters = value.dateFilters;

        return (value.dateFilters.filterWeekends ? new FilterWeekends().shouldBeSelectable(d) : true) &&
          new FilterSpecificDates(activeFilters.filterSpecificDates).shouldBeSelectable(d) &&
          new FilterSpecificDatesEveryYear(activeFilters.filterSpecificDatesEveryYear).shouldBeSelectable(d);
      }

      if (this.calendar) {
        this.calendar.updateTodaysDate();
      }
    });
  }

  goBack() {
    this.goBackEvent.emit();
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'red-date' : '';
    }

    return '';
  }

  onSelectDateTime(data: ReservationData) {
    this.selected = data.start_date;
    this.reservationService.makeReservation(data);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
