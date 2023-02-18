import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  BusinessHours,
} from 'src/app/reservation-calendar/models/business-hours';

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
  @Output() selectedDateTime = new EventEmitter<Date>();

  public isHourSelected = false;

  constructor() { }

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

  confirmHour() {
    if (this.selected) {
      this.selectedDateTime.emit(this.selected);
    }
  }

  ngOnInit() {
  }

}
