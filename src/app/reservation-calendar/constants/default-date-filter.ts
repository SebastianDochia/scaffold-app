// TODO: Remove coment for production
// export const DEFAULT_DATE_FILTER: DateFilters = {
//   filterWeekends: false,
//   filterSpecificDates: [],
//   filterSpecificDatesEveryYear: [],
// }

export const DEFAULT_DATE_FILTER = {
  filterWeekends: false,
  filterSpecificDates: [new Date(2023, 1, 15)],
  filterSpecificDatesEveryYear: [new Date(2023, 1, 16),],
}
