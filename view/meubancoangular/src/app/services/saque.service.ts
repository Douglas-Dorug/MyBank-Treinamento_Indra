import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISaqueDeposito } from '../interfaces/saque-deposito';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {
  endpoint = 'contas/sacar';
  api =  environment.api;

  constructor(private http: HttpClient) { }

  sacar(saque: ISaqueDeposito){
    return this.http.post(`${this.api}/${this.endpoint}/`, saque);
  }
}
