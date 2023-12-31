import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CountriesApiService } from '../services/countries-api.service';
import { CountryModel } from '../models/country.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CountryFormComponent } from '../country-form/country-form.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'capital', 'continent', 'population', 'area', 'actions'];
  dataSource: MatTableDataSource<CountryModel> = new MatTableDataSource<CountryModel>();

  constructor(private countriesApi: CountriesApiService, private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
    this.countriesApi.getAll().subscribe(result => {
      this.dataSource.data = result.map((element: any) => {
        return {
          id: element.id,
          area: element.area,
          capital: element.capital.name,
          continent: element.continent,
          name: element.name,
          population: element.population,
          cities: []
        };
      })
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(country?: CountryModel): void {
    console.log('opening dialog');
    const dialogRef = this.dialogRef.open(CountryFormComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: country
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('close');

      if (result.event === 'submit' && country) {
        this.countriesApi.updateCountry(country.id, result.data).subscribe();
        location.reload();
      } else if (result.event === 'add') {
        this.countriesApi.addCountry(result.data).subscribe();
        location.reload();
      }
    })
  }

  delete(id: number): void {
    this.countriesApi.deleteCountry(id).subscribe();
    location.reload();
  }
}
