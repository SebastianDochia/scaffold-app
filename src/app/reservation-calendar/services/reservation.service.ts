import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  ReservationData,
} from 'src/app/reservation-calendar/models/reservation-data';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getSystemConfig() {
    const headers = this.getHeaders();
    return this.http.get<SystemConfig>('http://localhost:3000/system', { headers });
  }

  updateDates(data: { bookingDuration: number, openingHour: Date, closingHour: Date, weekendOpeningHour: Date, weekendClosingHour: Date }, filterWeekends: boolean, filterSpecificDates: Array<Date>, filterSpecificDatesEveryYear: Array<Date>) {
    const headers = this.getHeaders();
    this.http.put('http://localhost:3000/system', { ...data, filterWeekends, filterSpecificDates, filterSpecificDatesEveryYear }, { headers }).subscribe();
  }

  updateServices() {
    const headers = this.getHeaders();

  }

  makeReservation(data: ReservationData) {
    const headers = this.getHeaders();
    this.http.post('http://localhost:3000/reservations', data, { headers }).subscribe();
  }

  getHeaders() {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

}
