import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesTableComponent } from './countries/countries-table/countries-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'country-information-portal';
}
