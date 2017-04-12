import { Todo } from './../interfaces/todo.interface';
import {Action} from "@ngrx/store";

export function todoReducer(state: Array<Todo> = [], action: Action) {
    switch (action.type) {
    case "ADD_TODO":
        return [...state,action.payload];
    case "TOGGLE_TODO":
        return state.map((todo:Todo)=>todo.nombre === action.payload.nombre ? Object.assign({},todo,{terminado:todo.terminado?false:true}):todo);
    case "DELETE_TODO":
        return state.filter((todo:Todo)=>todo.nombre!== action.payload.nombre);
    default:
        return state;
    }
}





