import { IClientes } from "./clientes";

export interface IContas {
  id: number;
  agencia: string;
  numero: string;
  saldo: number;
  cliente: IClientes;

}
