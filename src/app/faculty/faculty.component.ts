import { Component } from '@angular/core';
import { SidebarComponent } from '../components/navbar/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TopnavComponent } from '../components/navbar/topnav/topnav.component';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet, AnalyticsComponent, TopnavComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
}
