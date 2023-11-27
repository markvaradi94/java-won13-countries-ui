import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    // var response = this.httpClient.get("http://localhost:8080/countries");
    return this.httpClient.get("http://localhost:8080/countries");
  }
}
