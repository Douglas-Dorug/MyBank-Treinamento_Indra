import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExtrato } from 'src/app/interfaces/extrato';
import { ContasService } from 'src/app/services/contas.service';
import { ExtratoService } from 'src/app/services/extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {


  extratos: IExtrato[] = [];
  constructor(
    private contaService: ContasService,
    private extratoService: ExtratoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const agencia = this.route.snapshot.paramMap.get('agencia');
    const numeroConta = this.route.snapshot.paramMap.get('numeroConta');
    this.listarTodos(agencia!, numeroConta!);
  }

  listarTodos(agencia:string, numeroConta:string){
    this.extratoService.listarTodosExtratos(agencia,numeroConta).subscribe((result: IExtrato[]) => {
      this.extratos = result;
    });
  }

}
