import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditBoxModule } from './edit-box/edit-box.module';
import {
  ReservationCalendarModule,
} from './reservation-calendar/reservation-calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReservationCalendarModule,
    EditBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
