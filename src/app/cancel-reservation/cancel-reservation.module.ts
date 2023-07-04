import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import {
  CancelReservationRoutingModule,
} from 'src/app/cancel-reservation/cancel-reservation-routing.module';
import {
  CancelReservationComponent,
} from 'src/app/cancel-reservation/cancel-reservation.component';

@NgModule({
  declarations: [
    CancelReservationComponent,

  ],
  imports: [
    CommonModule,
    CancelReservationRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  exports: [],
})
export class CancelReservationModule { }
