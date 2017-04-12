import { Todo } from './todo.interface';
export interface AppState{
    contador:number;
    tareas:Array<Todo>;
}