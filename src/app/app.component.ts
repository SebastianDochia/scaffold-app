import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import {
  DEFAULT_SYSTEM_CONFIG,
} from 'src/app/reservation-calendar/constants/default-system-config';
import { DateFilters } from 'src/app/reservation-calendar/models/date-filters';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sysConf: BehaviorSubject<SystemConfig> = new BehaviorSubject(DEFAULT_SYSTEM_CONFIG);

  onDataChange(event: DateFilters) {
    const currentSysConfig = this.sysConf.getValue();
    currentSysConfig.dateFilters = event;

    this.sysConf.next(currentSysConfig);
  }
}
