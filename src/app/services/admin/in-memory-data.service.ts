import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FacultyMember } from './facultymembers';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {

    const facultyMembers = [
      {id: 0, name: "Nami Navigator", units: 20, status: "In-Class", employment: "Part-Time", isVisible: false},
      {id: 1, name: "Soul King", units: 21, status: "In-Class", employment: "Full-Time", isVisible: false},
      {id: 2, name: "Nico Robin", units: 21, status: "Day-Off", employment: "Full-Time", isVisible: false},
      {id: 3, name: "Tony Chopper", units: 18, status: "In-Class", employment: "Part-Time", isVisible: false},
      {id: 4, name: "Jinbel Son", units: 22, status: "Unavailable", employment: "Part-Time", isVisible: false},
    ]

    return { facultyMembers };
  }

  genId(facultyMembers: FacultyMember[]): number {
    return facultyMembers.length > 0 ? Math.max(...facultyMembers.map(member => member.id)) + 1 : 11;
  }
}
