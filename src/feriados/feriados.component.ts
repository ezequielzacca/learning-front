import { FechaComponent } from './../fecha/fecha.component';
import { Feriado } from './../interfaces/feriado.interface';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Component({
  selector: 'feriados',
  templateUrl: './feriados.component.html',
  styles:[`
  .example-card {
  margin:50px;
  border-radius:5px;
}
  `]
})



export class FeriadosComponent implements OnInit {

public feriados:Array<Feriado>;

    constructor(private http:Http){
    }

    ngOnInit(){        
        this.http.get("http://nolaborables.com.ar/api/v2/feriados/2017").map(res=>res.json())
            .map(feriadosJson=>{
                return feriadosJson.map(feriadoElem=><Feriado>{id:feriadoElem.id,nombre:feriadoElem.motivo,fecha:feriadoElem.dia + "/"+feriadosJson[0].mes + "/2017"})
            }).subscribe(data=>{this.feriados = data});    
            
    }

    eliminarFechaEnElPadre(id:string){
        console.log("el hijo pidio eliminar con id: "+id);
        this.feriados = this.feriados.filter((feriado:Feriado)=>feriado.id!==id);
    }
    

}
