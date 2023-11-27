import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../services/countries-api.service';
import { CountryModel } from '../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  constructor(private countriesApi: CountriesApiService) {

  }
  country: string = "Moldova";
  countries: CountryModel[] = [];

  ngOnInit(): void {
    this.country = "Kazakhstan";
    this.countriesApi.getAll().subscribe(result => {
      this.countries = result.map((element: any) => {
        return {
          id: element.id,
          area: element.area,
          capital: element.capital,
          continent: element.continent,
          name: element.name,
          population: element.population,
          cities: []
        };
      })

      console.log(this.countries[0]);
    });
  }

  saySomething(): string {
    return 'hi from my method';
  }

  update(): void {
    console.log('update was clicked');
  }

  delete(): void {
    console.log('delete was clicked');
  }
}