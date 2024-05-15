import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import {
  selectCountries,
} from '../../states/country/country.selector';
import { updateCountry } from '../../states/country/country.actions';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class CountryDetailsComponent {
  countries: Observable<Country[]>;
  selectedCountry: Country | undefined;
  private api = inject(CountryApiService);
  profileForm = new FormGroup({
    population: new FormControl(0, Validators.min(1)),
    capital: new FormControl('', Validators.minLength(3)),
  });

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.countries = this.store.select(selectCountries);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.countries.subscribe((countries) => {
        this.selectedCountry = countries.find((country) => country.id === id);
        if (this.selectedCountry) {
          this.profileForm.setValue({
            population: this.selectedCountry.population,
            capital: this.selectedCountry.capital[0],
          });
        }
      });
    });
  }

  onSubmit() {
    const { population, capital } = this.profileForm.value;
    console.log(population, capital);
    if (!population || !capital) return;
    this.selectedCountry = {
      ...this.selectedCountry!,
      population,
      capital: [capital],
    };
    this.store.dispatch(updateCountry({ value: this.selectedCountry }));
    this.api
      .updateCountry(this.selectedCountry)
      .subscribe(() => this.router.navigate(['']));
  }
}
