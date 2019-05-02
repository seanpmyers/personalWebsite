import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Route Components */
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { LyroComponent } from './lyro/lyro.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'lyro', component: LyroComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
