import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleBlockComponent } from '../../components/faculty/faculty-schedule/schedule-block/schedule-block.component';
import { schedule } from '../admin/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFacultyFetcherService {
  url ='http://localhost:3000/FacultyCourse';
  tempweek!: String;


  constructor(private http: HttpClient) { }

  fetchAll(){
    return this.http.get<schedule[]>(this.url);
  }

  fetchSchedDay(week: number){



    switch (week) {
      case 0:
        this.tempweek = "Sunday";
        break;

      case 1:
        this.tempweek = "Monday";
        break;

      case 2:
        this.tempweek = "Tuesday";
        break;

      case 3:
        this.tempweek = "Wednesday";
        break;

      case 4:
        this.tempweek = "Thursday";
        break;

      case 5:
        this.tempweek = "Friday";
        break;

      case 6:
        this.tempweek = "Saturday";
        break;

      default:
        break;
    }

    // console.log(this.url + "/?facultyID=1&day=" + this.tempweek);
    
    return this.http.get<schedule[]>(this.url + "/?facultyID=1&day=" + this.tempweek);
  }
}
