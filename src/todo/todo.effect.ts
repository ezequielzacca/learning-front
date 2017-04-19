import {Effect, Actions, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import { Http, Headers } from '@angular/http';
import {Observable} from "rxjs";
import { UNDO_ACTION } from 'ngrx-undo';

@Injectable()
export class TodoEffects {
  
  constructor(
    private action$: Actions,
    private http: Http
    ) { }

  private headers() {
    return {headers: new Headers({'Content-Type': 'application/json'})}
  }

  @Effect() add_todo$ = this.action$
    .ofType('ADD_TODO')
      // Map the payload into JSON to use as the request body
      .map(action => action)
      .switchMap(action => this.http.post(`/api/v1/todos`, JSON.stringify(action.payload), this.headers())
        // If successful, dispatch success action with result
        .map(res => ({ type: 'ADD_TODO_SUCCESS', payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: UNDO_ACTION, payload: action }))
      );

  @Effect() toggle_todo$ = this.action$
    .ofType('TOGGLE_TODO')
      // Map the payload into JSON to use as the request body
      .map(action => action)
      .switchMap(action => this.http.post(`/api/v1/todos/${action.payload._id}`,{}, this.headers())
        // If successful, dispatch success action with result
        .map(res => ({ type: 'TOGGLE_TODO_SUCCESS', payload: action.payload._id }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: UNDO_ACTION, payload: action }))
      );

  @Effect() init_todo$ = this.action$
    .ofType('INIT_TODOS')
      // Map the payload into JSON to use as the request body
      .map(action => action)
      .switchMap(action => this.http.get(`/api/v1/todos`, this.headers())
        // If successful, dispatch success action with result
        .map(res => ({ type: 'INIT_TODOS_SUCCESS', payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: UNDO_ACTION, payload: action }))
      );

  @Effect() del_todo$ = this.action$
    .ofType('DELETE_TODO')
      // Map the payload into JSON to use as the request body
      .map(action => action)
      .switchMap(action => this.http.delete(`/api/v1/todos/${action.payload._id}`, this.headers())
        // If successful, dispatch success action with result
        .map(res => ({ type: 'DELETE_TODO_SUCCESS' }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: UNDO_ACTION, payload: action }))
      );

}
