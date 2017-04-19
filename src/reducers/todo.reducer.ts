import { Todo } from './../interfaces/todo.interface';
import {Action} from "@ngrx/store";

export function todoReducer(state: Array<Todo> = [], action: Action) {
    switch (action.type) {
    case "INIT_TODOS_SUCCESS":
        return action.payload;
    case "ADD_TODO":
        return [...state,action.payload];
    case "TOGGLE_TODO":
        return state.map((todo:Todo)=>todo.nombre === action.payload.nombre ? Object.assign({},todo,{terminado:todo.terminado?false:true}):todo);
    case "DELETE_TODO":
        return state.filter((todo:Todo)=>todo.nombre!== action.payload.nombre);
    case "ADD_TODO_SUCCESS":
        return state.map((todo:Todo)=>todo.nombre === action.payload.nombre ? Object.assign({},todo,{_id:action.payload._id}):todo);
    case "INIT_TODOS":
    default:
        return state;
    }
}





