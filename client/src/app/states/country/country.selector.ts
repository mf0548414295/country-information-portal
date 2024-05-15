import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './country.reducer';

export const selectCountryFeature =
  createFeatureSelector<CountryState>('country');
export const selectCountries = createSelector(
  selectCountryFeature,
  (state: CountryState) => state.countries
);
export const selectCountryError = createSelector(
  selectCountryFeature,
  (state: CountryState) => state.error
);
