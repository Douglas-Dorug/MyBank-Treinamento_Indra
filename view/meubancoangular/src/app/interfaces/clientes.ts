export interface IClientes {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  observacoes: string;
  ativo?: boolean;
}
