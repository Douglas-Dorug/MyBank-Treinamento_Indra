import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IContas } from '../interfaces/contas';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  endpoint = 'contas/';
  api =  environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas(){
    return this.http.get<IContas[]>(`${this.api}/${this.endpoint}`);
  }

  buscarPorId(id: number){
    return this.http.get<IContas>(`${this.api}/${this.endpoint}/${id}`);
  }

  consultarSaldo(agencia: string, numeroConta: string): Observable<number>{
    return this.http.get<number>(`${this.api}/${this.endpoint}/consultar-saldo${agencia}/${numeroConta}`);
  }
}
