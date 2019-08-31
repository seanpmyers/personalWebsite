import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Route Components */
import { HomeComponent } from './home/home.component';
import { RunComponent } from './run/run.component';


const routes: Routes = [
  { path: '', component: RunComponent},
  { path: 'Projects', component: RunComponent},
  { path: 'Runs', component: RunComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }