import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  url = 'http://localhost:8080/countries';

  constructor(private httpClient: HttpClient) { }

  getAll(filters?: any): Observable<any> {
    let queryParams = new HttpParams({ fromObject: filters });
    return this.httpClient.get(this.url, { params: queryParams });
  }

  updateCountry(id: number, requestBody: CountryModel): Observable<any> {
    return this.httpClient.patch(this.url + '/' + id, requestBody);
  }

  deleteCountry(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  addCountry(country: CountryModel): Observable<any> {
    return this.httpClient.post(this.url, country);
  }
}
