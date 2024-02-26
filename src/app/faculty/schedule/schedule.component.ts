import { Component } from '@angular/core';
import { ScheduleDateCircleComponent } from '../../components/faculty/faculty-schedule/schedule-date-circle/schedule-date-circle.component';
import { ScheduleBlockComponent } from '../../components/faculty/faculty-schedule/schedule-block/schedule-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ScheduleDateCircleComponent, ScheduleBlockComponent, CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  dates: number[] = [];
  monthsForm: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  currDate = new Date();
  currMonth: string = this.monthsForm[this.currDate.getMonth()];
  tempDate = new Date();
  week: number = this.currDate.getDay();

  constructor(){
    this.updateDateArr();
  }

  changeDateSelected(date: number){
    this.currDate.setDate(date);
    this.updateDateArr();
    this.week = this.currDate.getDay();
  }

  //Creates date array list based on currDate
  updateDateArr(){
    this.dates = [];
    for (let i = 0; i < 15; i++){
      this.tempDate.setDate(this.currDate.getDate() + (i - 7))
      this.dates[i] = this.tempDate.getDate();
    }
  }
}
