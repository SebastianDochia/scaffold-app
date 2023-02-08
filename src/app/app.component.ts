import { Component } from '@angular/core';

import { DateFilters } from 'src/app/reservation-calendar/models/date-filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dateFilters: DateFilters = {
    filterWeekends: false,
    filterSpecificDates: [new Date(2023, 1, 15)],
    filterSpecificDatesEveryYear: [new Date(2023, 1, 16),],
  }

}
