import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  first,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import {
  Reservation,
  ReservationResponse,
} from 'src/app/reservation-calendar/models/reservation';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss']
})
export class CancelReservationComponent implements OnInit {
  isActionComplete: boolean = false;
  reservationData: Reservation | null = null;
  params: string = '';

  ngOnInit(): void {
    this.route.queryParams.pipe(
      tap(params => this.params = params.id),
      switchMap(params => this.http.get<ReservationResponse>(`http://localhost:3000/reservations/clients/${params.id}`))
    ).pipe(map(reservation => {

      return {
        date: reservation.start_date,
        phoneNumber: reservation.phone,
        service: reservation.service,
        subOption: reservation.title,
        email: reservation.email,
        name: reservation.name
      }
    })).subscribe(response => {
      this.reservationData = response;
    });

  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  onCancelReservation() {
    this.http.delete(`http://localhost:3000/reservations/${this.params}`).pipe(first()).subscribe(res => {
      this.isActionComplete = true;
    });
  }
}
