import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyMembersComponent } from './admin/faculty-members/faculty-members.component';
import { ProgramAnalyticsComponent } from './admin/program-analytics/program-analytics.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'faculty/0001', component: FacultyComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'analytics', component: ProgramAnalyticsComponent}
  ]},
  {path: '**', component: PagenotfoundComponent}
];
