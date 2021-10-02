import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  clientes: any[] = [];
  constructor(private clienteServicie: ClienteService) { }

  ngOnInit(): void {
    this.clienteServicie.listarTodosClientes().subscribe((result: any) => {
      this.clientes = result;
    });
  }

}
