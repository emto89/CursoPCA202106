import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
  
  getUsuarios() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu() {
    return this._http.get<Componente[]>('assets/data/menu-opts.json');
  }

}
