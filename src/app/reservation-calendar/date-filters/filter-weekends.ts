import { DateFilter } from 'src/app/reservation-calendar/models/date-filter';

export class FilterWeekends implements DateFilter {
  shouldBeSelectable(d: Date | null): boolean {
    if (!d) {
      return true;
    }
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
}
