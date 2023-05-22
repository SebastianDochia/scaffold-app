import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

import {
  DEFAULT_SYSTEM_CONFIG,
} from 'src/app/reservation-calendar/constants/default-system-config';
import {
  ItemPrice,
  ServiceOption,
} from 'src/app/reservation-calendar/models/specific-options';
import {
  SpecificsUserSelection,
} from 'src/app/reservation-calendar/models/specifics-user-selection';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';

@Component({
  selector: 'rc-specifics',
  templateUrl: './specifics.component.html',
  styleUrls: ['./specifics.component.scss']
})
export class SpecificsComponent implements OnInit {
  @Input() systemConfig: SystemConfig = DEFAULT_SYSTEM_CONFIG;
  @Output() userSelection = new EventEmitter<SpecificsUserSelection>()

  selectedData: any = null;
  selectedFirstOption: ServiceOption | null = null;
  selectedSecondOption: ItemPrice | null = null;
  specificsForm = new FormGroup({});

  constructor() { }

  ngOnInit() {
  }

  selectFirstOption(selection: MatOptionSelectionChange) {
    this.selectedFirstOption = selection.source.value;
  }

  selectSecondOption(selection: MatOptionSelectionChange) {
    this.selectedSecondOption = selection.source.value
  }

  isSelectionComplete(): boolean {
    if (this.selectedFirstOption?.services) {
      return this.selectedFirstOption !== null && this.selectedSecondOption !== null;
    }

    return this.selectedFirstOption !== null
  }

  confirmSelection() {
    if (this.selectedFirstOption && this.selectedSecondOption) {
      this.userSelection.emit({
        serviceOption: this.selectedFirstOption,
        service: this.selectedSecondOption
      });

      return;
    }

    console.error("How did you get here?");
  }

}
