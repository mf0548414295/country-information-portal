import { Injectable, inject } from '@angular/core';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCountry, loadCountryFailure, loadCountrySuccess } from './country.actions';
import { catchError, map, switchMap,of } from 'rxjs';

@Injectable()
export class CountryEffect {
  private api = inject(CountryApiService);
  actions = inject(Actions);

  loadCountries = createEffect(() =>
    this.actions.pipe(
      ofType(loadCountry),
      switchMap(() =>
        this.api.getCountries().pipe(
          map((res) => loadCountrySuccess({ countries: res })),
          catchError((error: { message: string }) =>
            of(loadCountryFailure({ errorMessage: error.message }))
          )
        )
      )
    )
  );
}

