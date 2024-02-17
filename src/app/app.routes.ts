import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacultyComponent } from './faculty/faculty.component';


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'faculty/202210139', component: FacultyComponent}
];
