import { Component } from '@angular/core';

import {
  DateFilters,
} from 'interactive-reservation-calendar/lib/models/date-filters';
import {
  SystemConfig,
} from 'interactive-reservation-calendar/lib/models/system-config';
import { BehaviorSubject } from 'rxjs';
import {
  DEFAULT_SYSTEM_CONFIG,
} from 'src/app/reservation-calendar/constants/default-system-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  sysConf: BehaviorSubject<SystemConfig> = new BehaviorSubject(DEFAULT_SYSTEM_CONFIG);

  onDataChange(event: DateFilters) {
    const currentSysConfig = this.sysConf.getValue();
    currentSysConfig.dateFilters = event;

    this.sysConf.next(currentSysConfig);
  }
}
