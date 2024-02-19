import { Injectable } from '@angular/core';
import { FacultyMember } from './facultymembers';

@Injectable({
  providedIn: 'root'
})
export class FacultymembersService {

  facultyMembers: FacultyMember[] = [
    {name: "Nami Navigator", units: 20, status: "In-Class", employment: "Part-Time", isVisible: false},
    {name: "Soul King", units: 21, status: "In-Class", employment: "Full-Time", isVisible: false},
    {name: "Nico Robin", units: 21, status: "Day-Off", employment: "Full-Time", isVisible: false},
    {name: "Tony Chopper", units: 18, status: "In-Class", employment: "Part-Time", isVisible: false},
    {name: "Jinbel Son", units: 22, status: "Unavailable", employment: "Part-Time", isVisible: false},
  ]

  getFacultyMembers(): FacultyMember[] {
    return this.facultyMembers;
  }

  constructor() { }
}
