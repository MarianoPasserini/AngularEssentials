import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymPageComponent } from './shared/pages/gym-page/gym-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { FinancesPageComponent } from './shared/pages/finances-page/finances-page.component';
import { NotesPageComponent } from './shared/pages/notes-page/notes-page.component';
import { ProjectsPageComponent } from './shared/pages/projects-page/projects-page.component';
import { SettingsPageComponent } from './shared/pages/settings-page/settings-page.component';
import { TasksPageComponent } from './shared/pages/tasks-page/tasks-page.component';


const routes: Routes = [
  {
    path:'gym',
    component: GymPageComponent
  },
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'finance',
    component: FinancesPageComponent
  },
  {
    path:'notes',
    component: NotesPageComponent
  },
  {
    path:'projects',
    component: ProjectsPageComponent
  },
  {
    path:'settings',
    component: SettingsPageComponent
  },
  {
    path:'tasks',
    component: TasksPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
