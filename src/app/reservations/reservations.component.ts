import {
  Component,
  OnInit,
} from '@angular/core';

import { Reservation } from 'src/app/reservation-calendar/models/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
