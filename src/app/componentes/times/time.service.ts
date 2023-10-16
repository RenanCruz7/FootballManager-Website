import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Time } from './time';


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private readonly API = "http://localhost:8080/times"
  constructor(private http: HttpClient) { }

  listar(): Observable<Time[]>{
    return this.http.get<Time[]>(this.API)
  }
}
