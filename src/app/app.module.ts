import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ListarJogadoresComponent } from './componentes/jogadores/listar-jogadores/listar-jogadores.component';
import { ListarTimesComponent } from './componentes/times/listar-times/listar-times.component';
import { TextoIntrodutorioComponent } from './componentes/texto-introdutorio/texto-introdutorio.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListarJogadoresComponent,
    ListarTimesComponent,
    TextoIntrodutorioComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
