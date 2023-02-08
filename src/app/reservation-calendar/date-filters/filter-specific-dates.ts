import { DateFilter } from 'src/app/reservation-calendar/models/date-filter';

export class FilterSpecificDates implements DateFilter {
  constructor(private specificDates: Date[]) { }

  shouldBeSelectable(d: Date | null): boolean {
    if (!d || !this.specificDates.length) {
      return true;
    }
    return !this.specificDates.some(date => date.getTime() === d.getTime());
  }
}
