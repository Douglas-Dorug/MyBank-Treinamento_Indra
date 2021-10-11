import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import { DepositoService } from 'src/app/services/deposito.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

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
    private depositoService: DepositoService,
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

  depositar(){
    const deposito: ISaqueDeposito = this.formValue.value;
    this.depositoService.depositar(deposito).subscribe(result => {
      Swal.fire('Sucesso!','Depósito efetuado com successo!','success')
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Opa......','Algo deu errado durante a transação!','error')
      console.error(error)
    });
  }

}
