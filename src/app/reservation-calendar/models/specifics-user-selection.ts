import {
  ItemPrice,
  ServiceOption,
} from 'src/app/reservation-calendar/models/specific-options';

export interface SpecificsUserSelection {
  serviceOption: ServiceOption,
  service: ItemPrice
}
