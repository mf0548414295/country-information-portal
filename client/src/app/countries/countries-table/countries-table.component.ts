import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  selectCountries,
  selectCountryError,
} from '../../states/country/country.selector';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';
import { AsyncPipe } from '@angular/common';
import { AppState } from './../../states/app.state';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-countries-table',
  standalone: true,
  imports: [MatTableModule, AsyncPipe, MatButtonModule],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.scss',
})
export class CountriesTableComponent {
  countries!: Country[];
  error!: Observable<string | null>;
  constructor(private router: Router, private store: Store<AppState>) {
    this.store.pipe(select(selectCountries)).subscribe((countries) => {
      this.countries = countries;
    });
    this.error = this.store.select(selectCountryError);
  }
  displayedColumns: string[] = [
    'name',
    'capital',
    'region',
    'subRegion',
    'population',
    'details',
  ];

  navigateToDetails(id: string) {
    this.router.navigate(['details', id]);
  }
}
