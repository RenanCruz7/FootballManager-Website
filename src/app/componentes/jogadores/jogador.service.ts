import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Jogador } from './jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private readonly APIJAVA = "http://localhost:8080/jogadores"
  private readonly API = "http://localhost:3000/jogadores"

  constructor(private http: HttpClient) { }

  listar(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>(this.API)
  }

  cadastrar(jogador: Jogador): Observable<Jogador> {
    return this.http.post<Jogador>(this.API, jogador)
  }
}
