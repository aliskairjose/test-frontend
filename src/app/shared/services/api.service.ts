import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiEnum } from '../enums.ts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #baseUrl = environment.apiUrl;

  constructor(
    private readonly httpService: HttpClient
  ) { }

  list<T>(slug: ApiEnum): Observable<T>{
    return this.httpService.get<T>(`${this.#baseUrl}${slug}`);
  }
}
