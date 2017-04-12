import { Todo } from './../interfaces/todo.interface';
import { Observable } from 'rxjs/Rx';
import { AppState } from './../interfaces/app.state';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
    selector: 'tareas',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {

    tareas:Observable<Array<Todo>>;

    constructor(private store:Store<AppState>) { }

    ngOnInit() {

        this.tareas = this.store.select((state:AppState)=>state.tareas);
     }     

     crearTarea(nombre:string){
         this.store.dispatch({type:"ADD_TODO",payload:{nombre:nombre,terminado:false}});
     }
     toggleTarea(tarea:Todo){
         this.store.dispatch({type:"TOGGLE_TODO",payload:tarea});
     }
     delete(tarea:Todo){
         this.store.dispatch({type:"DELETE_TODO",payload:tarea});
     }
}