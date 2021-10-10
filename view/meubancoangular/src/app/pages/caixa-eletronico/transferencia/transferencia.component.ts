import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  formValue: FormGroup = new FormGroup({
    agenciaOrigem: new FormControl('', Validators.required),
    agenciaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  });

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  transferir(){
    const transferencia: ITransferencia = this.formValue.value;
    this.transferenciaService.transferir(transferencia).subscribe(result => {
      Swal.fire('Sucesso!','Saque efetuado com successo!','success')
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Opa......','Algo deu errado durante a transação!','error')
      console.error(error)
    });
  }


}
