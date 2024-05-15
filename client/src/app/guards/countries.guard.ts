import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCountry } from '../states/country/country.actions';
import { HttpClient } from '@angular/common/http';
import { CountryApiService } from '../services/country-api/country-api.service';
import { AppState } from '../states/app.state';

@Injectable({
  providedIn: 'root',
})
export class CountriesGuard {
  http=inject(HttpClient);
  countryApi=inject(CountryApiService);
  constructor(private store: Store<AppState>) {}

  canActivate(): boolean {
    this.store.dispatch(loadCountry());
    return true;
  }
}
