import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'eb-edit-box',
  templateUrl: './edit-box-container.component.html',
  styleUrls: ['./edit-box-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBoxComponent {
  filterSpecificDates: Array<Date> = [];
  filterSpecificDatesEveryYear: Array<Date> = [];

  removeSpecificDate(date: Date) {
    this.removeDate(this.filterSpecificDates, date);
  }

  removeSpecificDateEveryYear(date: Date) {
    this.removeDate(this.filterSpecificDatesEveryYear, date);
  }

  toggleDateToEveryYear(date: Date) {
    this.toggleDate(this.filterSpecificDates, this.filterSpecificDatesEveryYear, date);
  }

  toggleDateToSpecific(date: Date) {
    this.toggleDate(this.filterSpecificDatesEveryYear, this.filterSpecificDates, date);
  }

  addDate(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const date = event.value;
      const index = this.filterSpecificDates.indexOf(date);
      console.log(index);
      console.log(this.filterSpecificDates);
      if (index < 0) {
        this.filterSpecificDates.push(date);
      }
    }
  }

  private toggleDate(switchFrom: Array<Date>, switchTo: Array<Date>, date: Date) {
    const switchFromIndex = switchFrom.indexOf(date);
    const switchToIndex = switchTo.indexOf(date);

    if (switchFromIndex >= 0 && switchToIndex < 0) {
      switchFrom.splice(switchFromIndex, 1);

      switchTo.push(date);
    }
  }

  private removeDate(datesArray: Array<Date>, date: Date) {
    const index = datesArray.indexOf(date);

    if (index >= 0) {
      datesArray.splice(index, 1);
    }
  }
}
