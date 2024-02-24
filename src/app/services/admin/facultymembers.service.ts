import { Injectable } from '@angular/core';
import { FacultyMember } from './facultymembers';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { facultyMemberResource } from './facultyMemberResource';

@Injectable({
  providedIn: 'root'
})

export class FacultymembersService{

  constructor( private http: HttpClient ) { }

  // private facultyMembersURI = 'http://localhost:3000/facultyMembers';  // URL to web api
  private facultyMembersURI = 'http://localhost:3000/facultyMembers?'
  private facultyMembersSchedule = 'http://localhost:3000/FacultyCourse?';

  getFacultyMembers(params='_page=1&_per_page=10'): Observable<facultyMemberResource> {
    let temp = this.facultyMembersURI;
    temp = temp.concat(params);
    return this.http.get<facultyMemberResource>(temp)
  }

  getFacultySchedules(params: string): Observable<any> {
    let temp = this.facultyMembersSchedule;
    temp = temp.concat(params);
    return this.http.get<any>(temp);
  }

  getURI(params: string): string {
    let temp = this.facultyMembersURI;
    temp = temp.concat(params);
    return temp;
  }

  getPagination(): any {
    return this.http.get<any>(this.facultyMembersURI.concat('_page=1&_per_page=10'));
  }

}
