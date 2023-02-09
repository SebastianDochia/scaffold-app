import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {
  SelectedDateContainerComponent,
} from 'src/app/reservation-calendar/components/selected-date-container/selected-date-container.component';
import {
  ReservationCalendarComponent,
} from 'src/app/reservation-calendar/reservation-calendar.component';

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
