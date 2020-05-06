import { Component } from '@angular/core';
import { PersonajesService } from './servicios/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'Personajes';//

    listapersonajes:[];

    constructor (private personajesService: PersonajesService) {

     this.listapersonajes=[];
     this.llenarlistaDePersonajes ();

    }

     llenarlistaDePersonajes ( ) {

      this.personajesService.traerTodosLosPersonajes ().subscribe (
        (data) => {
          console.log("DATA:", data);
          this.listapersonajes = data["results"];
        }
   
        );
                //this.listaPlanetas


     }

}
