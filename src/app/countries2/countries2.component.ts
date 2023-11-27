import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../services/countries-service.service';
import { Country2Model } from '../models/country2.model';

@Component({
  selector: 'app-countries2',
  templateUrl: './countries2.component.html',
  styleUrls: ['./countries2.component.css']
})
export class Countries2Component implements OnInit {
  country: string = 'Romania';
  countries: Country2Model[] = [];

  constructor(private countriesService: CountriesServiceService) {
  }

  ngOnInit(): void {
    this.country = 'Mongolia';
    this.countriesService.getAll().subscribe(result => {
      this.countries = result.map((element: any) => {
        return {
          id: element.id,
          area: element.area,
          capital: element.capital.name,
          continent: element.continent,
          name: element.name,
          population: element.population,
          cities: []
        }
      });
    });

    
  }

  saySomething(): string {
    console.log("Hi");
    return 'Hello from my component';
  }

  update(): void {
    console.log('Update was clicked');
    this.countriesService.getAll().subscribe(result => {
      console.log(result);
    });
  }

  delete(): void {
    console.log('Delete was clicked');
  }
}
