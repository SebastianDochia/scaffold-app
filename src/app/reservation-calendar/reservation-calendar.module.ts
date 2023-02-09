import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

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
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [

  ],
  exports: [
    ReservationCalendarComponent
  ]
})
export class ReservationCalendarModule { }
