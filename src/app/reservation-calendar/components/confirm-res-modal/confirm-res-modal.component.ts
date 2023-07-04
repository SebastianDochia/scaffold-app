import {
  Component,
  Inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import {
  ReservationData,
} from 'src/app/reservation-calendar/models/reservation-data';

@Component({
  selector: 'app-confirm-res-modal',
  templateUrl: './confirm-res-modal.component.html',
  styleUrls: ['./confirm-res-modal.component.scss']
})
export class ConfirmResModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmResModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
