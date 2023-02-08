import { DateFilter } from 'src/app/reservation-calendar/models/date-filter';

export class FilterSpecificDatesEveryYear implements DateFilter {
  constructor(private specificDatesEveryYear: Date[]) { }

  shouldBeSelectable(d: Date | null): boolean {
    if (!d || !this.specificDatesEveryYear.length) {
      return true;
    }
    return !this.specificDatesEveryYear.some(date =>
      date.getMonth() === d.getMonth() &&
      date.getDate() === d.getDate()
    );
  }
}
