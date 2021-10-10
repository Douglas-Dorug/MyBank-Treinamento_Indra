import { Component, OnInit } from '@angular/core';
import { IContas } from 'src/app/interfaces/contas';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.css']
})
export class ListagemContasComponent implements OnInit {

  contas: IContas[] = [];
  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.contasService.listarTodasContas().subscribe((result: any) => {
      this.contas = result;
    });
  }

}
