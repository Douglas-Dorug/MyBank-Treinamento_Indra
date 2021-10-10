import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoComponent } from './pages/caixa-eletronico/deposito/deposito.component';
import { SaqueComponent } from './pages/caixa-eletronico/saque/saque.component';
import { TransferenciaComponent } from './pages/caixa-eletronico/transferencia/transferencia.component';
import { CadatroEdicaoClientesComponent } from './pages/clientes/cadatro-edicao-clientes/cadatro-edicao-clientes.component';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/clientes', pathMatch: 'full'
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
    path: 'ATM/saque', component: SaqueComponent
  },
  {
    path: 'ATM/transferencia', component: TransferenciaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
