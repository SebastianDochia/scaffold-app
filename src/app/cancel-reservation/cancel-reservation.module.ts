import { NgModule } from '@angular/core';

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
    CancelReservationRoutingModule
  ],
  providers: [],
  exports: [],
})
export class CancelReservationModule { }
