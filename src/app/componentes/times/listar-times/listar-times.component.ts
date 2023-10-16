import { Component } from '@angular/core';
import { Time } from '../time';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-listar-times',
  templateUrl: './listar-times.component.html',
  styleUrls: ['./listar-times.component.css']
})
export class ListarTimesComponent {
  listaTimes: Time[] = []

  constructor(private service: TimeService){}


  ngOnInit():void{
    this.service.listar().subscribe((listaTimes: any) =>{
      this.listaTimes = listaTimes.content
    })
  }
}
