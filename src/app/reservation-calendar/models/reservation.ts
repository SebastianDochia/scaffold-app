export interface Reservation {
  date: Date,
  phoneNumber: string,
  service: string,
  subOption: string,
  email: string,
  name?: string,
}

export interface ReservationResponse {
  start_date: Date,
  phone: string,
  service: string,
  title: string,
  email: string,
  name?: string,
}
