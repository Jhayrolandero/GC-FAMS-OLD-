import { Component } from '@angular/core';
import { FacultyMilestoneCalendarComponent } from '../../components/faculty/faculty-milestone-calendar/faculty-milestone-calendar.component';
import { FacultyMilestoneHistoryComponent } from '../../components/faculty/faculty-milestone-history/faculty-milestone-history.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    FacultyMilestoneCalendarComponent, 
    FacultyMilestoneHistoryComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  constructor(){
    console.log("Test render");
  }
}
