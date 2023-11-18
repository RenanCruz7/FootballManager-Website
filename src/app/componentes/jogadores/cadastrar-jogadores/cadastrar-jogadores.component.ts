import { Jogador } from './../jogador';
import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JogadorService } from '../jogador.service';

export class JogadorModel implements Jogador {
  constructor(
    public nome: string,
    public idade: number,
    public posicao: string,
    public pe: string,
    public fornecedor: string,
    public ativo: boolean = true,
    public id?: number
  ) {}
}

@Component({
  selector: 'app-cadastrar-jogadores',
  templateUrl: './cadastrar-jogadores.component.html',
  styleUrls: ['./cadastrar-jogadores.component.css']
})
export class CadastrarJogadoresComponent {

  jogador: Jogador = new JogadorModel('',0,'','','')

  constructor(
    private service: JogadorService,
    private router: Router,) {}

  @Output() cadastrar: string = "Cadastrar"
  
  criarJogador() {
    this.service.cadastrar(this.jogador).subscribe();
  }
}
