import { TodoComponent } from './../todo/todo.component';
import { ContadorComponent } from './../contador/contador.component';
import { FechaComponent } from './../fecha/fecha.component';
import { FeriadosComponent } from './../feriados/feriados.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './../about/about.component';
import { HomeComponent } from './../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import {StoreModule} from "@ngrx/store";
import {contadorReducer} from "../reducers/contador.reducer";
import {todoReducer} from "../reducers/todo.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}
import { StoreUndoModule } from 'ngrx-undo';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from "../todo/todo.effect";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeriadosComponent,
    FechaComponent,
    ContadorComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({ contador: contadorReducer, tareas:todoReducer }),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
    StoreUndoModule.interceptStore({
      bufferSize: 100 // cantidad de acciones que recuerda para poder cancelar
    }),
    EffectsModule.run(TodoEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
