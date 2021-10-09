import { Component, OnInit } from '@angular/core';
import { IClientes } from 'src/app/interfaces/clientes';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  clientes: IClientes[] = [];
  constructor(private clienteServicie: ClienteService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(){
    this.clienteServicie.listarTodosClientes().subscribe((result: IClientes[]) => {
      this.clientes = result;
    });
  }

  confirmar(id: number){
    Swal.fire({
      title: 'Deseja realmente prossegir?',
      text: "Esta ação não poderá ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteServicie.remover(id).subscribe(result => {
          this.listarTodos();
          Swal.fire(
            'Deletado!',
            'O cliente foi removido com sucesso!',
            'success'
          )
        }, error => {
          Swal.fire('Opa......','Algo deu errado durante a operação!','error')
          console.error(error)
        })

      }
    })
  }

}
