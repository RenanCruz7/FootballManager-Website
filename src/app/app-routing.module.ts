import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextoIntrodutorioComponent } from './componentes/texto-introdutorio/texto-introdutorio.component';
import { ListarJogadoresComponent } from './componentes/jogadores/listar-jogadores/listar-jogadores.component';
import { ListarTimesComponent } from './componentes/times/listar-times/listar-times.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { CadastrarJogadoresComponent } from './componentes/jogadores/cadastrar-jogadores/cadastrar-jogadores.component';
import { SucessoComponent } from './componentes/sucesso/sucesso.component';



const routes: Routes = [
  // Rota Padrao
  {
    path: '',
    redirectTo: 'texto-introdutorio',
    pathMatch: "full"
  },
  {
    path: 'texto-introdutorio',
    component: TextoIntrodutorioComponent
  },
  {
    path: 'listar-jogadores',
    component: ListarJogadoresComponent
  },
  {
    path: 'cadastrar-jogadores',
    component: CadastrarJogadoresComponent
  },
  {
    path: 'listar-times',
    component: ListarTimesComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'sucesso',
    component: SucessoComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
