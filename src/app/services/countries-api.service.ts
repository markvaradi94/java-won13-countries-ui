import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    // var response = this.httpClient.get("http://localhost:8080/countries");
    return this.httpClient.get('http://localhost:8080/countries');
  }

  updateCountry(id: number, request: CountryModel): Observable<any> {
    return this.httpClient.patch('http://localhost:8080/countries/' + id, request);
  }
}
