import {
  Component,
  OnInit,
} from '@angular/core';
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
import {
  ReservationService,
} from 'src/app/reservation-calendar/services/reservation.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sysConf: BehaviorSubject<SystemConfig> = new BehaviorSubject(DEFAULT_SYSTEM_CONFIG);
  loggedInUser$ = this.authService.loggedInUser$;

  constructor(
    private router: Router,
    private authService: AuthService,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.getSystemConfig();
  }

  private getSystemConfig() {
    this.reservationService.getSystemConfig().subscribe((response: SystemConfig) => {
      this.sysConf.next(response);
    })
  }

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
