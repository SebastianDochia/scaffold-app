import {
  AfterViewInit,
  Component,
} from '@angular/core';

import { first } from 'rxjs/operators';
import { Reservation } from 'src/app/reservation-calendar/models/reservation';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements AfterViewInit {
  selected: Date | null = null;
  displayedColumns: string[] = ['date', 'phoneNumber', 'service', 'subOption', 'name'];
  reservations: Array<Reservation> = [{
    date: new Date(),
    phoneNumber: '0735515934',
    service: 'Gigel',
    subOption: 'Tuns + Barbierit',
    email: 'mihael.dumbrava@gmail.com',
    name: 'Mihael Dumbrava',
  }];

  constructor(
    private reservationsService: ReservationsService
  ) { }

  ngAfterViewInit() {
    this.getReservationsForSelectedDay(this.selected);
  }

  getReservationsForSelectedDay(date: Date | null) {
    const dateToGet = date ?? new Date();
    this.reservationsService.getReservationsForDate(dateToGet).pipe(first()).subscribe(data => {
      this.reservations = data;
    });
  }

}
