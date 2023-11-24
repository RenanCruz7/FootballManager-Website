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
import { CadastrarJogadoresComponent } from './componentes/jogadores/cadastrar-jogadores/cadastrar-jogadores.component';
import { FormsModule } from '@angular/forms';
import { BotaoComponent } from './componentes/botao/botao.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { IdadeValidaDirective } from './directives/idade-valida.directive';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListarJogadoresComponent,
    ListarTimesComponent,
    TextoIntrodutorioComponent,
    SobreComponent,
    CadastrarJogadoresComponent,
    BotaoComponent,
    MensagemComponent,
    IdadeValidaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
