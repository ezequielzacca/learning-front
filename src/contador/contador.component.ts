import { Observable } from 'rxjs/Rx';
import { AppState } from './../interfaces/app.state';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
    selector: 'contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

    value:Observable<number>;

    constructor(private store:Store<AppState>) { }

    ngOnInit() {
        //this.value = 0;
        this.value = this.store.select((state:AppState)=>state.contador);
     }

     incrementar(){
         //this.value++;
         this.store.dispatch({type:"INCREMENTAR"});
     }

     decrementar(){
         //this.value--;
         this.store.dispatch({type:"DECREMENTAR"});
     }
     
}