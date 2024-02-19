import { Component, OnInit } from '@angular/core';
import { FacultymembersService } from '../../../../services/admin/facultymembers.service';
import { NgClass, NgFor } from '@angular/common';
import { FacultyMember } from '../../../../services/admin/facultymembers';
@Component({
  selector: 'app-faculty-box',
  standalone: true,
  imports: [NgFor, NgClass],
  providers: [FacultymembersService],
  templateUrl: './faculty-box.component.html',
  styleUrl: './faculty-box.component.css'
})
export class FacultyBoxComponent implements OnInit{

  facultyMembers: FacultyMember[] = [];

  constructor(private facultyService: FacultymembersService) {}

  getFacultyMembers(): void {
    this.facultyMembers = this.facultyService.getFacultyMembers();
  }

  ngOnInit(): void {
      this.getFacultyMembers();

      console.log(this.facultyMembers)
  }
}
