import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import { SaqueService } from 'src/app/services/saque.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  formValue: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  });

  preencheFormValue(conta: IContas){
    this.formValue = new FormGroup({
      id: new FormControl(conta.id, Validators.required),
      agencia: new FormControl(conta.agencia, Validators.required),
      numeroConta: new FormControl(conta.numero, Validators.required),
      valor: new FormControl('', Validators.required)
    })
  }

  constructor(
    private contaService: ContasService,
    private saqueService: SaqueService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(Number(id)){
      this.contaService.buscarPorId(Number(id)).subscribe(resultCliente =>{
        this.preencheFormValue(resultCliente)
      })
      console.log(id);
    }
  }

  sacar(){
    const saque: ISaqueDeposito = this.formValue.value;
    Swal.fire({
      title: 'Processando saque...',
      didOpen: () => {
        Swal.showLoading()
    }});
    this.saqueService.sacar(saque).subscribe(result => {
      Swal.fire('Sucesso!','Saque efetuado com successo!','success')
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Opa......','Algo deu errado durante a transação!','error')
      console.error(error)
    });
  }

}
