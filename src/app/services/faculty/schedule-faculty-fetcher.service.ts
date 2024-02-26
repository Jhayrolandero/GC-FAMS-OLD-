import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleBlockComponent } from '../../components/faculty/faculty-schedule/schedule-block/schedule-block.component';
import { schedule } from '../admin/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFacultyFetcherService {
  url ='http://localhost:8080/GC-FaMS/API/';


  constructor(private http: HttpClient) { }

  fetchAll(){
    return this.http.get<schedule[]>(this.url);
  }

  fetchSchedDay(week: number){
    // console.log(this.url + "/?facultyID=1&day=" + this.tempweek);
  
    return this.http.get<schedule[]>(this.url + "getschedules/" + "1/" + week);
  }
}
