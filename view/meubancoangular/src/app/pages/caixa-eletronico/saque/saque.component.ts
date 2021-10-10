import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
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

  constructor(
    private saqueService: SaqueService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  sacar(){
    const saque: ISaqueDeposito = this.formValue.value;
    this.saqueService.sacar(saque).subscribe(result => {
      Swal.fire('Sucesso!','Saque efetuado com successo!','success')
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Opa......','Algo deu errado durante a transação!','error')
      console.error(error)
    });
  }

}
