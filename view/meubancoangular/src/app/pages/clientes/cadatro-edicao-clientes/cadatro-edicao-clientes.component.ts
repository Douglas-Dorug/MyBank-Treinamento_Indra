import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClientes } from 'src/app/interfaces/clientes';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadatro-edicao-clientes',
  templateUrl: './cadatro-edicao-clientes.component.html',
  styleUrls: ['./cadatro-edicao-clientes.component.css']
})
export class CadatroEdicaoClientesComponent implements OnInit {

  formValue: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    observacoes: new FormControl(''),
    ativo: new FormControl(true),
  });
  constructor(
     private clienteService: ClienteService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(Number(id)){
      this.clienteService.buscarPorId(Number(id)).subscribe(resultCliente =>{
        this.preencheFormValue(resultCliente)
      })
      console.log(id);
    }
  }

  preencheFormValue(cliente: IClientes){
    this.formValue = new FormGroup({
      id: new FormControl(cliente.id),
      nome: new FormControl(cliente.nome, Validators.required),
      cpf: new FormControl(cliente.cpf, Validators.required),
      email: new FormControl(cliente.email, [Validators.required, Validators.email]),
      observacoes: new FormControl(cliente.observacoes),
      ativo: new FormControl(cliente.ativo),
    })
  }

  enviar() {
    const cliente: IClientes = this.formValue.value;
    this.clienteService.cadastrar(cliente).subscribe(result =>{
      Swal.fire('Sucesso!','Cadastrado com successo','success')
      this.router.navigate(['/clientes']);
    }, error => {
      Swal.fire('Opa......','Algo deu errado no cadastro!','error')
      console.error(error)
    });
  }
  getAttrForm(nome: string){
    return this.formValue.get(nome)?.value;
  }

}
