import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Jogador } from './jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private readonly API = "http://localhost:8080/jogadores"

  constructor(private http: HttpClient) { }

  listar(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>(this.API)
  }
}
