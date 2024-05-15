import { Routes } from '@angular/router';
import { CountriesTableComponent } from './countries/countries-table/countries-table.component';
import { CountriesGuard } from './guards/countries.guard';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';

export const routes: Routes = [
  {
    path: '',
    component: CountriesTableComponent,
    canActivate: [CountriesGuard],
  },
  {
    path: 'details/:id',
    component: CountryDetailsComponent,
    canActivate: [CountriesGuard],
  },
];
