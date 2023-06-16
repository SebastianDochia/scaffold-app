import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { CancelReservationComponent } from './cancel-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: CancelReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelReservationRoutingModule { }
