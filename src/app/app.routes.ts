import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyMembersComponent } from './admin/faculty-members/faculty-members.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/views/analytics/analytics.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'faculty/202210139', component: FacultyComponent},
  {path: 'admin', component: DashboardComponent, children: [
    {path: 'analytics', component: AnalyticsComponent}
  ]}
]
