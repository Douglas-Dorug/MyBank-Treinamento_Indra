import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
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

  constructor(
    private depositoService: DepositoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
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
