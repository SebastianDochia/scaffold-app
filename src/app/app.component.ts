import { Component } from '@angular/core';

import {
  DEFAULT_SYSTEM_CONFIG,
} from 'src/app/reservation-calendar/constants/default-system-config';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sysConf: SystemConfig = DEFAULT_SYSTEM_CONFIG;

}
