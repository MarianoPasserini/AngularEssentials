import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  private apiUrl: string = 'https://restcountries.com/v3.1'


  constructor(private http: HttpClient) { }


  searchInput ( term:string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
  }
}
