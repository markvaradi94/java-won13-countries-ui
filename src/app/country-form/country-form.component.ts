import { Component, Optional, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryModel } from '../models/country.model';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {
  countryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    capital: new FormControl('', Validators.required),
    continent: new FormControl('', Validators.required),
    population: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required)
  });

  currentCountry: CountryModel;
  isSearch: boolean;

  constructor(public dialogRef: MatDialogRef<CountryFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.currentCountry = data.value;
    this.isSearch = data.isSearch;
  }

  ngOnInit(): void {
    this.countryForm.controls.name.setValue(this.currentCountry.name);
    this.countryForm.controls.capital.setValue(this.currentCountry.capital);
    this.countryForm.controls.continent.setValue(this.currentCountry.continent);
    this.countryForm.controls.population.setValue(this.currentCountry.population.toString());
    this.countryForm.controls.area.setValue(this.currentCountry.area.toString());
  }

  onSubmit(): void {
    const updatedCountry = {
      name: this.countryForm.controls.name.getRawValue(),
      capital: this.countryForm.controls.capital.getRawValue(),
      continent: this.countryForm.controls.continent.getRawValue(),
      population: this.countryForm.controls.population.getRawValue(),
      area: this.countryForm.controls.area.getRawValue()
    }

    if (this.currentCountry) {
      this.dialogRef.close({ event: 'submit', data: { value: updatedCountry, isSearch: false } });
    } else if (this.isSearch) {
      this.dialogRef.close({ event: 'search', data: { value: updatedCountry, isSearch: true } });
    } else {
      this.dialogRef.close({ event: 'add', data: { value: updatedCountry, isSearch: false } });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
