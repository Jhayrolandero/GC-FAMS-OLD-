import { Component } from '@angular/core';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [FacultyDashboardComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {

}
