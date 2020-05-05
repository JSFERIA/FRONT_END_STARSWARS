import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HOMEComponent} from './home/home.component';
import {FILMSComponent} from './films/films.component';
import {PEOPLEComponent } from './people/people.component';
import {PLANETSComponent } from './planets/planets.component';
import {SPECIESComponent } from './species/species.component';
import {STARSHISPSComponent} from './starshisps/starshisps.component';
import {VEHICLESComponent} from './vehicles/vehicles.component';



const routes: Routes = [
{path: 'HOME',  component: HOMEComponent  },
{path: 'FILMS',  component: FILMSComponent  },
{path: 'PEOPLE',  component: PEOPLEComponent  },
{path: 'PLANETS',  component: PLANETSComponent },
{path: 'SPECIES',  component: SPECIESComponent   },
{path: 'STARSHISPS',  component: STARSHISPSComponent  },
{path: 'VEHICLES',  component: VEHICLESComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
