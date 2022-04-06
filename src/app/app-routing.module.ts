import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from "./missionlist/missionlist.component";
import { MissiondetailsComponent } from "./missiondetails/missiondetails.component";

const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'details', component: MissiondetailsComponent},

  // TO be separated
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
