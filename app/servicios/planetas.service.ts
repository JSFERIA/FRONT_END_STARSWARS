import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private httpClient:HttpClient) {}

 
    traerTodosLosPlanetas () {
     return this.httpClient.get("http://swapi.py4e.com/api/planets/");

    }

   }


