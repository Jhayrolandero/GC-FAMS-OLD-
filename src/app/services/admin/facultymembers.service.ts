import { Injectable } from '@angular/core';
import { FacultyMember } from './facultymembers';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultymembersService{

  constructor( private http: HttpClient ) { }

  private facultyMembersURI = 'http://localhost:3000/facultyMembers';  // URL to web api
  private facultyMembersPagination = 'http://localhost:3000/facultyMembers?_page=1&_per_page=5'
  private facultyMembersSchedule = 'http://localhost:3000/FacultyCourse?';

  getFacultyMembers(): Observable<FacultyMember[]> {
    return this.http.get<FacultyMember[]>(this.facultyMembersURI)
  }

  getFacultySchedules(params: string): Observable<any> {

    let temp = this.facultyMembersSchedule;
    temp = temp.concat(params);
    return this.http.get<any>(temp);
  }

  getURI(params: string): string {
    let temp = this.facultyMembersSchedule;
    temp = temp.concat(params);

    return temp;
  }

  getPagination(): any {
    return this.http.get<any>(this.facultyMembersPagination);
  }

}
