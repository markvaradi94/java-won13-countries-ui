import { Component, Inject, Optional, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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


  // in the constructor we get the reference from the parent injected in our component
  constructor(
    public dialogRef: MatDialogRef<CountryFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any
  ) {
    // console.log(data);
    this.currentCountry = data;
  }


  ngOnInit(): void {
    this.countryForm.controls.name.setValue(this.currentCountry.name);
    this.countryForm.controls.capital.setValue(this.currentCountry.capital);
    this.countryForm.controls.continent.setValue(this.currentCountry.continent);
    this.countryForm.controls.population.setValue(this.currentCountry.population.toString());
    this.countryForm.controls.area.setValue(this.currentCountry.area.toString());
  }

  onSubmit(): void {
    console.log('submit');
    const updatedCountry = {
      name: this.countryForm.controls.name.getRawValue(),
      capital: this.countryForm.controls.capital.getRawValue(),
      continent: this.countryForm.controls.continent.getRawValue(),
      population: this.countryForm.controls.population.getRawValue(),
      area: this.countryForm.controls.area.getRawValue()
    }

    this.dialogRef.close({ event: 'submit', data: updatedCountry });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
