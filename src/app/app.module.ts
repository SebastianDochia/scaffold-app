import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReservationsModule } from 'src/app/reservations/reservations.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditBoxModule } from './edit-box/edit-box.module';
import {
  ReservationCalendarModule,
} from './reservation-calendar/reservation-calendar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReservationCalendarModule,
    ReservationsModule,
    EditBoxModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
