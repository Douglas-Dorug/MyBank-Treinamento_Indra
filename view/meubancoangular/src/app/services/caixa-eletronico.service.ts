import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISaqueDeposito } from '../interfaces/saque-deposito';
import { ITransferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})
export class CaixaEletronicoService {

  endpoint = 'contas/';
  api =  environment.api;
  constructor(private http: HttpClient) { }

  sacar(saque: ISaqueDeposito){
    return this.http.post(`${this.api}/${this.endpoint}/sacar/`, saque);
  }

  depositar(deposito: ISaqueDeposito){
    return this.http.post(`${this.api}/${this.endpoint}/deposito/`, deposito);
  }

  transferir(transferir: ITransferencia){
    return this.http.post(`${this.api}/${this.endpoint}/transferencia/`, transferir);
  }
}
