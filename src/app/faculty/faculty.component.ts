import { Component } from '@angular/core';
import { SidebarComponent } from '../components/navbar/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet, AnalyticsComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
}
