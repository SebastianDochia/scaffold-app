export interface SpecificOptions {
  optionName: string;
  serviceOptions: Array<ServiceOption>,
  userNottice: string | null
}

export interface ServiceOption {
  optionName: string,
  services: Array<ItemPrice> | null
}

export interface ItemPrice {
  optionName: string,
  price: number,
  currency: AcceptedCurrencies
}

export enum AcceptedCurrencies {
  EUR = 'EUR',
  RON = 'RON',
  USD = 'USD'
}
