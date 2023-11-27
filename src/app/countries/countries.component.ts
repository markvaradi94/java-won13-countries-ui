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
  displayedColumns: string[] = ['id', 'name', 'capital', 'continent', 'population', 'area', 'actions'];
  dataSource: CountryModel[];

  ngOnInit(): void {
    this.country = "Kazakhstan";
    this.countriesApi.getAll().subscribe(result => {
      this.dataSource = result.map((element: any) => {
        return {
          id: element.id,
          area: element.area,
          capital: element.capital,
          continent: element.continent,
          name: element.name,
          population: element.population,
          cities: []
        };
      });
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
