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
    this.schedule.fetchSchedDay(this.week).subscribe((response: schedule[]) => {
      this.schedules = response;
    });

  }

  tConvert (time: any) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    let temp = time.join(''); // return adjusted time or original string
    return temp.slice(0, -5) + temp.slice(-2);
  }
}