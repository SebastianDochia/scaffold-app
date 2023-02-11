import { NgModule } from '@angular/core';

import {
  NgLetDirective,
} from 'src/app/reservation-calendar/directives/ngLet.directive';

@NgModule(
  {
    declarations: [NgLetDirective],
    exports: [NgLetDirective]
  }
)
export class ngLetModule { }
