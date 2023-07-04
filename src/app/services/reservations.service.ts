import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Reservation,
  ReservationResponse,
} from 'src/app/reservation-calendar/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  constructor(
    private http: HttpClient
  ) { }

  cancelReservation(reservationId: string, userId: string) {

  }

  getReservationsForDate(date: Date): Observable<Array<Reservation>> {
    const headers = this.getHeaders();
    return this.http.post<Array<ReservationResponse>>('http://localhost:3000/reservations/by-date', { date }, { headers }).pipe(map(response => {
      return response.map(reservation => {
        return {
          date: reservation.start_date,
          phoneNumber: reservation.phone,
          service: reservation.service,
          subOption: reservation.title,
          email: reservation.email,
          name: reservation.name
        }
      })
    }));
  }

  getHeaders() {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
