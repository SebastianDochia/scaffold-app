import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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

  constructor() { }

  getCurrentDayHours(hours: BusinessHours, selected: Date) {
    return hours[selected.getDay()];
  }

  ngOnInit() {
  }

}
