import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GymPageComponent } from './pages/gym-page/gym-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { FinancesPageComponent } from './pages/finances-page/finances-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HomePageComponent,
    GymPageComponent,
    ProjectsPageComponent,
    TasksPageComponent,
    FinancesPageComponent,
    NotesPageComponent,
    SettingsPageComponent
  ],
  declarations: [
    SidebarComponent,
    GymPageComponent,
    HomePageComponent,
    ProjectsPageComponent,
    TasksPageComponent,
    FinancesPageComponent,
    NotesPageComponent,
    SettingsPageComponent
  ],
  providers: [],
})
export class SharedModule { }
