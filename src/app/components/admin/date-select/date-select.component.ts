import { Component, Input, Output, EventEmitter} from '@angular/core';
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
export class DateSelectComponent{

  day: string = "Monday";
  @Output() params = new EventEmitter<string>();

  getFacultySchedule() {
    let params: string = 'day=';

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

    this.params.emit(params);
  }

}
