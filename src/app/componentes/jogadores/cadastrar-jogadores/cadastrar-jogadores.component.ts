import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JogadorService } from '../jogador.service';


@Component({
  selector: 'app-cadastrar-jogadores',
  templateUrl: './cadastrar-jogadores.component.html',
  styleUrls: ['./cadastrar-jogadores.component.css']
})
export class CadastrarJogadoresComponent {
  constructor(
    private service: JogadorService,
    private router: Router,
  ) { }


  criarJogador(form: NgForm) {
  }
}
