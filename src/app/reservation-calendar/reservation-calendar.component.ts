import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import {
  DEFAULT_STYLE_CONFIG,
} from 'src/app/reservation-calendar/constants/default-style-config';
import {
  DEFAULT_SYSTEM_CONFIG,
} from 'src/app/reservation-calendar/constants/default-system-config';
import {
  ReservationStep,
} from 'src/app/reservation-calendar/models/reservation-step.enum';
import {
  SpecificsUserSelection,
} from 'src/app/reservation-calendar/models/specifics-user-selection';
import { StyleConfig } from 'src/app/reservation-calendar/models/style-config';
import {
  SystemConfig,
} from 'src/app/reservation-calendar/models/system-config';
import {
  ReservationService,
} from 'src/app/reservation-calendar/services/reservation.service';

@Component({
  selector: 'irc-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss'],
})
export class ReservationCalendarComponent implements OnInit {
  @Input() styleConfig: StyleConfig = DEFAULT_STYLE_CONFIG;
  @Input() systemConfig: BehaviorSubject<SystemConfig> = new BehaviorSubject(DEFAULT_SYSTEM_CONFIG);
  @Input() step: ReservationStep = ReservationStep.SPECIFICS;

  specificsSelection: SpecificsUserSelection | null = null;
  ReservationStep = ReservationStep;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    //this.getSystemConfig();
  }

  private getSystemConfig() {
    this.reservationService.getSystemConfig().subscribe((response: SystemConfig) => {
      this.systemConfig.next(response);
    })
  }

  isAtSpecificsStep() {
    return this.step == ReservationStep.SPECIFICS;
  }

  onUserSelection(selection: SpecificsUserSelection) {
    console.log(selection);
    this.specificsSelection = selection;

    this.reservationService.selection = selection;

    this.step = ReservationStep.CALENDAR;
  }

  changePage(step: ReservationStep) {
    this.step = step;
  }
}
