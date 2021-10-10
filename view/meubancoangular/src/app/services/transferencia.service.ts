import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITransferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  endpoint = 'contas/transferencia';
  api =  environment.api;

  constructor(private http: HttpClient) { }

  transferir(transferir: ITransferencia){
    return this.http.post(`${this.api}/${this.endpoint}/`, transferir);
  }
}
