import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyMembersComponent } from './admin/faculty-members/faculty-members.component';
import { ProgramAnalyticsComponent } from './admin/program-analytics/program-analytics.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'faculty', component: FacultyComponent, children: [
    {path: 'profile', component: FacultyComponent},
    {path: 'analytics', component: FacultyComponent},
    {path: 'schedule', component: FacultyComponent},
    {path: 'projects', component: FacultyComponent},
    {path: 'graduate-studies', component: FacultyComponent},
    {path: 'certifications', component: FacultyComponent},
    {path: 'community-extensions', component: FacultyComponent},
    {path: 'evaluation', component: FacultyComponent},
  ]},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'admin-profile', component: ProgramAnalyticsComponent},
    {path: 'program-analytics', component: ProgramAnalyticsComponent},
    {path: 'faculty-members', component: FacultyMembersComponent},
    {path: 'faculty-schedules', component: ProgramAnalyticsComponent},
    {path: 'program-projects', component: ProgramAnalyticsComponent},
    {path: 'community-extensions', component: ProgramAnalyticsComponent},
    {path: 'evaluation-analytics', component: ProgramAnalyticsComponent},
  ]},
  {path: '**', component: PagenotfoundComponent}
];
