import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemClientesComponent } from './clientes/listagem-clientes/listagem-clientes.component';
import { CadatroEdicaoClientesComponent } from './clientes/cadatro-edicao-clientes/cadatro-edicao-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ListagemContasComponent } from './contas/listagem-contas/listagem-contas.component';
import { SaqueComponent } from './caixa-eletronico/saque/saque.component';
import { DepositoComponent } from './caixa-eletronico/deposito/deposito.component';
import { TransferenciaComponent } from './caixa-eletronico/transferencia/transferencia.component';
import { ExtratoComponent } from './caixa-eletronico/extrato/extrato.component';
import { HomeComponent } from './homePage/home/home.component';



@NgModule({
  declarations: [
    ListagemClientesComponent,
    CadatroEdicaoClientesComponent,
    ListagemContasComponent,
    SaqueComponent,
    DepositoComponent,
    TransferenciaComponent,
    ExtratoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
