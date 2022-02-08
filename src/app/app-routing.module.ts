import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { ConfigurationPageComponent } from './configuration/configuration-page/configuration-page.component';


const routes: Routes = [
  {path:'', component:ConnexionComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"configuration",component:ConfigurationPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
