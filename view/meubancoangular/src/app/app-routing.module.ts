import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoComponent } from './pages/caixa-eletronico/deposito/deposito.component';
import { ExtratoComponent } from './pages/caixa-eletronico/extrato/extrato.component';
import { SaqueComponent } from './pages/caixa-eletronico/saque/saque.component';
import { TransferenciaComponent } from './pages/caixa-eletronico/transferencia/transferencia.component';
import { CadatroEdicaoClientesComponent } from './pages/clientes/cadatro-edicao-clientes/cadatro-edicao-clientes.component';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';
import { HomeComponent } from './pages/homePage/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes', component: ListagemClientesComponent
  },
  {
    path: 'clientes/cadastrar', component: CadatroEdicaoClientesComponent
  },
  {
    path: 'clientes/editar/:id', component: CadatroEdicaoClientesComponent
  },
  {
    path: 'contas', component: ListagemContasComponent
  },
  {
    path: 'ATM/deposito', component: DepositoComponent
  },
  {
    path: 'contas/ATM/deposito/:id', component: DepositoComponent
  },
  {
    path: 'ATM/saque', component: SaqueComponent
  },
  {
    path: 'contas/ATM/saque/:id', component: SaqueComponent
  },
  {
    path: 'ATM/transferencia', component: TransferenciaComponent
  },
  {
    path: 'contas/extrato/:agencia/:numeroConta', component: ExtratoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
