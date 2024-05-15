import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country';

export const loadCountry = createAction('[Value] loadCountry');
export const loadCountrySuccess = createAction(
  '[Value] loadCountrySuccess',
  props<{ countries: Country[] }>()
);
export const loadCountryFailure = createAction(
  '[Value] loadCountryFailure',
  props<{ errorMessage: string }>()
);
export const updateCountry = createAction(
  '[Value] updateCountry',
  props<{ value: Country }>()
);