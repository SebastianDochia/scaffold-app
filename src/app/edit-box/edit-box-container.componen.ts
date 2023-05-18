import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { DateFilters } from 'src/app/reservation-calendar/models/date-filters';

@Component({
  selector: 'eb-edit-box',
  templateUrl: './edit-box-container.component.html',
  styleUrls: ['./edit-box-container.component.scss'],

})
export class EditBoxComponent {
  filterSpecificDates: Array<Date> = [];
  filterSpecificDatesEveryYear: Array<Date> = [];
  openWeekends: boolean = false;

  datesForm = new FormGroup({
    bookingDuration: new FormControl('', Validators.required),
    openingHour: new FormControl('', Validators.required),
    closingHour: new FormControl('', Validators.required),
    weekendOpeningHour: new FormControl(''),
    weekendClosingHour: new FormControl(''),
  });


  @Output()
  filterDates = new EventEmitter<DateFilters>();

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

  toggleWeekends(checked: boolean) {
    this.openWeekends = checked;

    this.emitData();
  }

  addDate(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const date = event.value;
      //getting the index using serialized date
      const index = this.filterSpecificDates.map(Number).indexOf(+date);

      if (index < 0) {
        this.filterSpecificDates.push(date);
      }

      this.emitData();
    }
  }

  onSubmit() {
    console.log(this.datesForm.value);
  }

  private toggleDate(switchFrom: Array<Date>, switchTo: Array<Date>, date: Date) {
    //getting the index using serialized date
    const switchFromIndex = switchFrom.map(Number).indexOf(+date);
    const switchToIndex = switchTo.map(Number).indexOf(+date);

    if (switchFromIndex >= 0 && switchToIndex < 0) {
      switchFrom.splice(switchFromIndex, 1);

      switchTo.push(date);

      this.emitData();
    }
  }

  private removeDate(datesArray: Array<Date>, date: Date) {
    const index = datesArray.indexOf(date);

    if (index >= 0) {
      datesArray.splice(index, 1);

      this.emitData();
    }
  }

  private emitData() {
    this.filterDates.emit({
      filterWeekends: !this.openWeekends,
      filterSpecificDates: this.filterSpecificDates,
      filterSpecificDatesEveryYear: this.filterSpecificDatesEveryYear
    });
  }
}
