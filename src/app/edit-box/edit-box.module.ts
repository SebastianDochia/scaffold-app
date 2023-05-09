import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { EditBoxComponent } from 'src/app/edit-box/edit-box-container.componen';
import {
  ngLetModule,
} from 'src/app/reservation-calendar/directives/ngLet.module';

@NgModule({
  declarations: [
    EditBoxComponent,
  ],
  imports: [
    CommonModule,
    ngLetModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
  ],
  exports: [
    EditBoxComponent,
  ]
})
export class EditBoxModule { }
