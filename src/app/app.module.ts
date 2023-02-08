import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  ReservationCalendarModule,
} from 'src/app/reservation-calendar/reservation-calendar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReservationCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
