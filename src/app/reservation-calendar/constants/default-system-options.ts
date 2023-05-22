import {
  AcceptedCurrencies,
  SpecificOptions,
} from 'src/app/reservation-calendar/models/specific-options';

export const DEFAULT_SPECIFIC_OPTIONS: SpecificOptions = {
  optionName: "Frizer",
  serviceOptions: [
    {
      optionName: "Gigel",
      services: [
        {
          optionName: "Tuns",
          price: 10,
          currency: AcceptedCurrencies.RON
        },
        {
          optionName: "Tuns + Barbierit",
          price: 15,
          currency: AcceptedCurrencies.RON
        }
      ]
    },
  ],
  userNottice: "Please arrive 5 minutes before yout reservation."
}
