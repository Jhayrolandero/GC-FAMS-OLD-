import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'faculty/202210139', component: FacultyComponent},
  {path: 'admin', component: AdminComponent}
];
