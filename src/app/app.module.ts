import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { FILMSComponent } from './films/films.component';
import { PEOPLEComponent } from './people/people.component';
import { PLANETSComponent } from './planets/planets.component';
import { SPECIESComponent } from './species/species.component';
import { STARSHISPSComponent } from './starshisps/starshisps.component';
import { VEHICLESComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    FILMSComponent,
    PEOPLEComponent,
    PLANETSComponent,
    SPECIESComponent,
    STARSHISPSComponent,
    VEHICLESComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
