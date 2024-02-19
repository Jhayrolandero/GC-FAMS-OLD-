import { Injectable } from '@angular/core';
import { FacultyMember } from './facultymembers';

@Injectable({
  providedIn: 'root'
})
export class FacultymembersService {

  facultyMembers: FacultyMember[] = [
    {name: "Nami Navigator", units: 20, status: "In-Class"},
    {name: "Soul King", units: 21, status: "In-Class"},
    {name: "Nico Robin", units: 21, status: "Day-Off"},
    {name: "Tony Chopper", units: 18, status: "In-Class"},
    {name: "Jinbel Son", units: 22, status: "Unavailable"},
  ]

  getFacultyMembers(): FacultyMember[] {
    return this.facultyMembers;
  }

  constructor() { }
}
