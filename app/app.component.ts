import { Component } from '@angular/core';
import { PlanetasService } from './servicios/planetas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
    listaPlanetas:[]; // 2) crear un atributo,3) en la consola escribir ng generate service y poner un nombre cualquiera
                      // 
 // title = 'MiPimerProyectoAngular';

  constructor (private PlanetasService: PlanetasService ) { //1)crear el  constructor de una clase 
    this.listaPlanetas =[];
   // this.listaPlanetas
  // this.Planetas = this.PlanetasService.getPlanetas() ;
   this.llenarlistaDePlanetas();

 }

   llenarlistaDePlanetas () {

     this.PlanetasService.traerTodosLosPlanetas ().subscribe (
     (data) => {
       console.log("DATA:", data);
       this.listaPlanetas = data["results"];
     }

     );
             
    
   }

}
