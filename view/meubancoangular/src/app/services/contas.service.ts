import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  endpoint = 'contas/';
  api =  environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas(){
    return this.http.get(`${this.api}/${this.endpoint}`);
  }
}
