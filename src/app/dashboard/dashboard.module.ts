import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ReservationCalendarModule } from 'interactive-reservation-calendar';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import {
  DashboardRoutingModule,
} from 'src/app/dashboard/dashboard.routing.module';
import { EditBoxModule } from 'src/app/edit-box/edit-box.module';
import { ReservationsModule } from 'src/app/reservations/reservations.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReservationCalendarModule,
    ReservationsModule,
    EditBoxModule,
    MatTabsModule,
  ],
  providers: [],
  exports: [],
})
export class DashboardModule { }
