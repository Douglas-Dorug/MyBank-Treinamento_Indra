import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClientes } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  endpoint = 'clientes';
  api =  environment.api;

  constructor(private http: HttpClient) { }

  listarTodosClientes(): Observable<IClientes[]>{
    return this.http.get<IClientes[]>(`${this.api}/${this.endpoint}/`);
  }

  cadastrar(cliente: IClientes){
    return this.http.post(`${this.api}/${this.endpoint}/`, cliente);
  }

  remover(id: number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }

  buscarPorId(id: number){
    return this.http.get<IClientes>(`${this.api}/${this.endpoint}/${id}`);
  }
}
