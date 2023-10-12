import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ListarJogadoresComponent } from './componentes/jogadores/listar-jogadores/listar-jogadores.component';
import { ListarTimesComponent } from './componentes/times/listar-times/listar-times.component';
import { TextoIntrodutorioComponent } from './componentes/texto-introdutorio/texto-introdutorio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListarJogadoresComponent,
    ListarTimesComponent,
    TextoIntrodutorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
