import { Feriado } from './../interfaces/feriado.interface';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fecha',
    template: `
  
  <td>{{fecha.nombre}}</td><td>{{fecha.fecha}}</td><td><button (click)="eliminarFecha(fecha.id)">Eliminar</button></td>
  
  `
})



export class FechaComponent {
    @Input("fecha") fecha: Feriado;
    @Output("fechaEliminada") fechaEliminada = new EventEmitter();

    eliminarFecha(id: string) {
        this.fechaEliminada.emit(id);
    }


}