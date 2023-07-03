import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import {
  DashboardRoutingModule,
} from 'src/app/dashboard/dashboard.routing.module';
import { EditBoxModule } from 'src/app/edit-box/edit-box.module';
import {
  ReservationCalendarModule,
} from 'src/app/reservation-calendar/reservation-calendar.module';
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
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  exports: [],
})
export class DashboardModule { }
