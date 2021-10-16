import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas';
import { IExtrato } from 'src/app/interfaces/extrato';
import { ContasService } from 'src/app/services/contas.service';
import { ExtratoService } from 'src/app/services/extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  agencia: string ='';
  numeroConta: string ='';
  saldo: number = 0;
  extratos: IExtrato[] = [];
  constructor(
    private contasService: ContasService,
    private extratoService: ExtratoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.agencia = this.route.snapshot.paramMap.get('agencia') || " ";
    this.numeroConta = this.route.snapshot.paramMap.get('numeroConta') || "";
    this.listarTodos(this.agencia!, this.numeroConta!);
    this.contasService.consultarSaldo(String(this.agencia), String(this.numeroConta)).subscribe((result: number) => {
      this.saldo = result;
    })
  }

  listarTodos(agencia:string, numeroConta:string){
    this.extratoService.listarTodosExtratos(agencia,numeroConta).subscribe((result: IExtrato[]) => {
      this.extratos = result;
    });
  }

}
