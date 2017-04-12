import { TodoComponent } from './../todo/todo.component';
import { ContadorComponent } from './../contador/contador.component';
import { FeriadosComponent } from './../feriados/feriados.component';
import { NgModule, Component } from '@angular/core';
import { AboutComponent } from './../about/about.component';
import { HomeComponent } from './../home/home.component';
import { RouterModule } from "@angular/router";
export const appRoutes: Array<any> = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about',      component: AboutComponent },
    { path: 'feriados',      component: FeriadosComponent },
    { path: 'contador', component: ContadorComponent },
     { path: 'tareas', component: TodoComponent }
 
];


