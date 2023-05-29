import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import {
  DEFAULT_SYSTEM_CONFIG,
} from 'src/app/reservation-calendar/constants/default-system-config';
import { DateFilters } from 'src/app/reservation-calendar/models/date-filters';
import {
  AcceptedCurrencies,
  ItemPrice,
  ServiceOption,
} from 'src/app/reservation-calendar/models/specific-options';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';

@Component({
  selector: 'eb-edit-box',
  templateUrl: './edit-box-container.component.html',
  styleUrls: ['./edit-box-container.component.scss'],

})
export class EditBoxComponent {
  @Output() filterDates = new EventEmitter<DateFilters>();
  @Output() firstOption = new EventEmitter<String>();
  @Output() newSystemConfig = new EventEmitter<SystemConfig>();
  @Input() systemConfig: SystemConfig = DEFAULT_SYSTEM_CONFIG;

  filterSpecificDates: Array<Date> = [];
  filterSpecificDatesEveryYear: Array<Date> = [];
  openWeekends: boolean = false;
  optionValue: string = "";
  subOptionName: string = "";
  subOptionPrice: number = 0;

  selectedService: ServiceOption | null = null;

  datesForm = new FormGroup({
    bookingDuration: new FormControl('', Validators.required),
    openingHour: new FormControl('', Validators.required),
    closingHour: new FormControl('', Validators.required),
    weekendOpeningHour: new FormControl(''),
    weekendClosingHour: new FormControl(''),
  });

  servicesForm = new FormGroup({
    firstOptionName: new FormControl(this.systemConfig.specificOptions.optionName, Validators.required),
    services: new FormControl('', Validators.required),
    subOption: new FormControl('', Validators.required),
    subOptionPrice: new FormControl('', Validators.required),
  });

  onFirstOptionNameChange() {

    this.systemConfig.specificOptions.optionName = this.servicesForm.get('firstOptionName')?.value;
  }

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

  addOption(option: string) {
    this.systemConfig.specificOptions.serviceOptions.push({
      optionName: option,
      services: []
    })
  }

  removeOption(option: ServiceOption) {
    const foundOptionIndex = this.systemConfig.specificOptions.serviceOptions.findIndex(item => item.optionName === option.optionName);
    if (foundOptionIndex !== -1) {
      this.systemConfig.specificOptions.serviceOptions.splice(foundOptionIndex, 1);
    }
  }

  selectOption(option: ServiceOption) {
    this.selectedService = option;
  }

  addSubOption(subOptionName: string, subOptionPrice: number) {
    if (this.selectedService) {
      const newItem: ItemPrice = {
        optionName: subOptionName,
        price: subOptionPrice,
        currency: AcceptedCurrencies.RON
      }

      this.systemConfig.specificOptions.serviceOptions.filter((item) => item.optionName == this.selectedService!.optionName)[0]?.services?.push(newItem);
    }
    this.systemConfig.specificOptions.serviceOptions
  }

  removeSubOption(option: ItemPrice) {
    const foundOptionIndex = this.systemConfig.specificOptions.serviceOptions.findIndex(item => item.optionName === this.selectedService?.optionName);

    const foundSubOptionIndex = this.systemConfig.specificOptions.serviceOptions[foundOptionIndex].services?.findIndex(item => item.optionName === option.optionName);
    if (foundSubOptionIndex !== -1) {
      this.systemConfig.specificOptions.serviceOptions[foundOptionIndex]?.services?.splice(foundSubOptionIndex!, 1);
    }
  }

  shouldAddBeDisabled(subOptionName: string, subOptionPrice: number): boolean {
    return !(subOptionName && subOptionPrice && this.selectedService);
  }

  getSubOptions(selectedOption: ServiceOption | null): Array<ItemPrice> | null {
    if (selectedOption) {
      return this.systemConfig.specificOptions.serviceOptions.filter((item) => item.optionName == selectedOption.optionName)[0]?.services;
    }

    return null;
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
