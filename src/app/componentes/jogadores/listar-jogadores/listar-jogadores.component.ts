import { Component, OnInit, Output } from '@angular/core';
import { JogadorService } from '../jogador.service';
import { Jogador } from '../jogador';

@Component({
  selector: 'app-listar-jogadores',
  templateUrl: './listar-jogadores.component.html',
  styleUrls: ['./listar-jogadores.component.css']
})

export class ListarJogadoresComponent{
  listaJogadores: Jogador[] = []
  constructor(private service:JogadorService){
  }

  @Output() cadastrar: string = "Cadastrar"
  @Output() excluir: string = "Excluir"
  @Output() editar: string = "Editar"
  
  /**
   *  Caso esteja utilizando a API do java trocar a linha 27 pela seguinte linha
   *  this.listaJogadores = listaJogadores.content;
   */
  ngOnInit():void{
    this.service.listar().subscribe((listaJogadores: any) => {
      console.log(listaJogadores)
      this.listaJogadores = listaJogadores
    });
  }

}

