import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character/';
  }

  getPersonajes(pPage = 1) {
    return this.httpClient.get(`${this.baseUrl}?page=${pPage}`).toPromise();
  }

}
