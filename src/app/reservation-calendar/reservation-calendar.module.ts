import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {
  ReservationCalendarComponent,
} from 'src/app/reservation-calendar/reservation-calendar.component';
import {
  SelectedDateContainerComponent,
} from 'src/app/reservation-calendar/selected-date-container/selected-date-container.component';

@NgModule({
  declarations: [
    ReservationCalendarComponent,
    SelectedDateContainerComponent
  ],
  imports: [
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule
  ],
  providers: [

  ],
  exports: [
    ReservationCalendarComponent
  ]
})
export class ReservationCalendarModule { }
