import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  private url: string = 'http://localhost:8080/countries';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  updateCountry(id: number, request: CountryModel): Observable<any> {
    return this.httpClient.patch(this.url + '/' + id, request);
  }

  deleteCountry(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  addCountry(request: CountryModel) {
    return this.httpClient.post(this.url, request);
  }
}
