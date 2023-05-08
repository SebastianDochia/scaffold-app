// TODO: Remove coment for production
// export const DEFAULT_DATE_FILTER: DateFilters = {
//   filterWeekends: false,
//   filterSpecificDates: [],
//   filterSpecificDatesEveryYear: [],
// }

export const DEFAULT_DATE_FILTER = {
  filterWeekends: true,
  filterSpecificDates: [new Date(2023, 3, 30)],
  filterSpecificDatesEveryYear: [new Date(2023, 3, 16),],
}
