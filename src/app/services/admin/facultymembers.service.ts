import { Injectable } from '@angular/core';
import { FacultyMember } from './facultymembers';
import { Observable, of } from 'rxjs';
import { FACULTYMEMBERS } from './mock-faculty-members';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultymembersService{

  constructor( private http: HttpClient ) { }

  private facultyMembersURI = 'http://localhost:3000/facultyMembers';  // URL to web api


  // getFacultyMembers(): FacultyMember[] {
  //   return this.facultyMembers;
  // }

  // getFacultyMembers(): Observable<FacultyMember[]> {
  //   const heroes = of(FACULTYMEMBERS);
  //   return heroes;
  // }

  getFacultyMembers(): Observable<FacultyMember[]> {
    return this.http.get<FacultyMember[]>(this.facultyMembersURI)
  }
  // getFacultyMembers(): Observable<FacultyMember[]> {
  //   return this.http.get<FacultyMember[]>(this.facultyMembersURI)
  // }



}
