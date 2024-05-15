import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from '../../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  private readonly serverAddress = 'https://localhost:7106/api/Country';
  http = inject(HttpClient);
  constructor() {}
  getCountries() {
    return this.http.get<Country[]>(this.serverAddress);
  }
  updateCountry(country: Country) {
    return this.http.put<Country>(
      `${this.serverAddress}?countryId=${country.id}`,
      country
    );
  }
}
