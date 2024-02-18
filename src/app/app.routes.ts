import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyMembersComponent } from './admin/faculty-members/faculty-members.component';
import { ProgramAnalyticsComponent } from './admin/program-analytics/program-analytics.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AnalyticsComponent } from './faculty/analytics/analytics.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'faculty', component: FacultyComponent, children: [
    {path: 'profile', component: AnalyticsComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'schedule', component: AnalyticsComponent},
    {path: 'projects', component: AnalyticsComponent},
    {path: 'graduate-studies', component: AnalyticsComponent},
    {path: 'certifications', component: AnalyticsComponent},
    {path: 'community-extensions', component: AnalyticsComponent},
    {path: 'evaluation', component: AnalyticsComponent},
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
