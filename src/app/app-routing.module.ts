import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { ScoringsComponent } from './scorings/scorings.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'scorings', component:ScoringsComponent},
  {path:'standings', component:StandingsComponent},
  {path:'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }