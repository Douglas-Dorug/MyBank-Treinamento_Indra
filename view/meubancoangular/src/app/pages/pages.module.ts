import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemClientesComponent } from './clientes/listagem-clientes/listagem-clientes.component';
import { CadatroEdicaoClientesComponent } from './clientes/cadatro-edicao-clientes/cadatro-edicao-clientes.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ListagemContasComponent } from './contas/listagem-contas/listagem-contas.component';



@NgModule({
  declarations: [
    ListagemClientesComponent,
    CadatroEdicaoClientesComponent,
    ListagemContasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
