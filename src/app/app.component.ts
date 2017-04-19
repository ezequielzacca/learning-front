import { Observable } from 'rxjs/Rx';
import { AppState } from './../interfaces/app.state';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  numero:Observable<number>;
  socket:any;
  constructor(private store:Store<AppState>) { }

  ngOnInit(){
    this.numero = this.store.select((state:AppState)=>state.contador);
    this.store.dispatch({type: "INIT_TODOS"});
  }

  //Aqui hay un websocket que se llamara socket que esta conectado a mi backend
  
  
} 
