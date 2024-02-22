import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FacultymembersService } from '../../../services/admin/facultymembers.service';
@Component({
  selector: 'app-date-select',
  standalone: true,
  imports: [FormsModule],
  providers: [FacultymembersService],
  templateUrl: './date-select.component.html',
  styleUrl: './date-select.component.css'
})
export class DateSelectComponent implements OnInit{

  day: string = "Monday";
  @Input('id') id:number = -1;
  @Output() schedules = new EventEmitter<string>();


  constructor(private facultyServices: FacultymembersService) {}

  getFacultySchedule() {
    let params: string = '?day=';

    switch(this.day) {
      case "Monday":
        params = params.concat("Monday")
        break;
      case "Tuesday":
        params = params.concat("Tuesday")
        break;
      case "Wednesday":
        params = params.concat("Wednesday")
        break;
      case "Thursday":
        params = params.concat("Thursday")
        break;
      case "Friday":
        params = params.concat("Friday")
        break;
      case "Saturday":
        params = params.concat("Saturday")
        break;
      case "Sunday":
        params = params.concat("Sunday")
        break;
    }

    params = params.concat(`&facultyID=${this.id}`)

    console.log(params);
    this.facultyServices.getFacultySchedules(params).subscribe(
      schedule => this.schedules.emit(schedule)
      )
  }

  ngOnInit(): void {

    let params: string = '?day=';
    params.concat(this.day);
    params = params.concat(`&facultyID=${this.id}`)

    console.log(params);
    this.facultyServices.getFacultySchedules(params).subscribe(
      schedule => this.schedules.emit(schedule)
    )
  }
}
