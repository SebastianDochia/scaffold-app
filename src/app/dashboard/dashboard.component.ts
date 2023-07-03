import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  sysConf: BehaviorSubject<SystemConfig> = new BehaviorSubject(DEFAULT_SYSTEM_CONFIG);
  loggedInUser$ = this.authService.loggedInUser$;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onDataChange(event: DateFilters) {
    const currentSysConfig = this.sysConf.getValue();
    currentSysConfig.dateFilters = event;

    this.sysConf.next(currentSysConfig);
  }

  goToAuth() {
    this.router.navigate(["/auth"]);
  }

  signOut() {
    this.authService.logout();
    this.goToAuth();
  }
}
