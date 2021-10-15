import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { CaixaEletronicoService } from 'src/app/services/caixa-eletronico.service';
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
    private caixaEletronicoService: CaixaEletronicoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  transferir(){
    const transferencia: ITransferencia = this.formValue.value;
    Swal.fire({
      title: 'Processando transferência...',
      didOpen: () => {
        Swal.showLoading()
    }});
    this.caixaEletronicoService.transferir(transferencia).subscribe(result => {
      Swal.fire('Sucesso!','Transferencia efetuada com successo!','success')
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Opa......','Algo deu errado durante a transação!','error')
      console.error(error)
    });
  }


}
