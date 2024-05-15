import { createReducer, on } from '@ngrx/store';
import {
  loadCountryFailure,
  loadCountrySuccess,
  updateCountry,
} from './country.actions';
import { Country } from '../../models/country';

export interface CountryState {
  countries: Country[];
  error: string | null;
}
export const initialCountryState: CountryState = {
  countries: [],
  error: null,
};
export const CountryReducer = createReducer(
  initialCountryState,
  on(loadCountrySuccess, (state, { countries }) => ({
    ...state,
    countries,
    error: null,
  })),
  on(loadCountryFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  })),
  on(updateCountry, (countryState, { value }) =>
    ({...countryState,countries:countryState.countries.map((country) =>
      country.id === value.id ? value : country
    )})
  )
);
