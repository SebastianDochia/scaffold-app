import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import {
  ngLetModule,
} from 'src/app/reservation-calendar/directives/ngLet.module';
import {
  ReservationsComponent,
} from 'src/app/reservations/reservations.component';

@NgModule({
  declarations: [
    ReservationsComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ngLetModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports: [
    ReservationsComponent,
  ]
})
export class ReservationsModule { }
