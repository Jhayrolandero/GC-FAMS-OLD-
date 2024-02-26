import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ScheduleFacultyFetcherService } from '../../../../services/faculty/schedule-faculty-fetcher.service';
import { schedule } from '../../../../services/admin/schedule';


@Component({
  selector: 'app-schedule-block',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './schedule-block.component.html',
  styleUrl: './schedule-block.component.css'
})
export class ScheduleBlockComponent {
  @Input() week: number = new Date().getDate();
  courseName!: string;
  schedules: schedule[] = [];
  weeks: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  constructor(private schedule:ScheduleFacultyFetcherService){
    this.getSchedule();
  }

  ngOnChanges(changes: SimpleChanges){
    this.getSchedule();
  }
  
  getSchedule(){
    //Fetches the schedule data based on passed selected date
    this.schedule.fetchSchedDay(this.week).subscribe((response:schedule[]) => {
      this.schedules = response;
    });
  }
}