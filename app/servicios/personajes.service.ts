import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private httpclient: HttpClient) { }

   traerTodosLosPersonajes () {
   
    return this.httpclient.get("https://swapi.py4e.com/api/people/")

   }



}
