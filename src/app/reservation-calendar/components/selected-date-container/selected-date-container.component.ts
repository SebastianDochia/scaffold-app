import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  ConfirmResModalComponent,
} from 'src/app/reservation-calendar/components/confirm-res-modal/confirm-res-modal.component';
import {
  BusinessHours,
} from 'src/app/reservation-calendar/models/business-hours';
import {
  ReservationData,
} from 'src/app/reservation-calendar/models/reservation-data';

@Component({
  selector: 'rc-selected-date-container',
  templateUrl: './selected-date-container.component.html',
  styleUrls: ['./selected-date-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedDateContainerComponent implements OnInit {
  @Input() selected: null | Date = null;
  @Input() selectDateMessage: null | string = null;
  @Input() businessHours: null | BusinessHours = null;
  @Input() companyId: string | undefined = '';
  @Output() selectedDateTime = new EventEmitter<ReservationData>();

  public isHourSelected = false;

  constructor(
    public dialog: MatDialog
  ) { }

  getCurrentDayHours(hours: BusinessHours, selected: Date) {
    return hours[selected.getDay()];
  }

  hourSelected(hour: Date) {
    if (this.selected) {
      this.selected = new Date(
        this.selected.getFullYear(),
        this.selected.getMonth(),
        this.selected.getDate(),
        hour.getHours(),
        hour.getMinutes(),
        hour.getSeconds()
      );
    }

    this.isHourSelected = true;
  }

  confirmHour(): void {
    const dialogRef = this.dialog.open(ConfirmResModalComponent, {
      width: '350px',
      data: { start_date: this.selected, name: '', email: '', number: '', companyId: this.companyId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedDateTime.emit(result);
    });
  }

  ngOnInit() {
  }

}
