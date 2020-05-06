import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private httpClient:HttpClient) {}

  //  getPlanetas() {
    
     // const Planetas = -- {name:"Tatooine" , rotation_period:"23"  , orbital_period:"304",gravity: "" };
    //return Planetas; 
      
   // }
    traerTodosLosPlanetas () {
     return this.httpClient.get("http://swapi.py4e.com/api/planets/");

    }

   }


