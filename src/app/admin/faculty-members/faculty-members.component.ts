import { Component, OnInit } from '@angular/core';
import { FacultyBoxComponent } from '../../components/admin/faculty-members/faculty-box/faculty-box.component';
import { FacultymembersService } from '../../services/admin/facultymembers.service';
import { FacultyMember } from '../../services/admin/facultymembers';
import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-faculty-members',
  standalone: true,
  imports: [FacultyBoxComponent, NgFor],
  providers: [FacultymembersService],
  templateUrl: './faculty-members.component.html',
  styleUrl: './faculty-members.component.css'
})

export class FacultyMembersComponent implements OnInit {

  facultyMembers: FacultyMember[] = [];

  constructor( private facultyService: FacultymembersService ){}

  getFacultyMembers(): void {
    this.facultyService.getFacultyMembers()
        .subscribe(facultyMembers => this.facultyMembers = facultyMembers);
  }
  ngOnInit(): void {
    this.getFacultyMembers();

    console.log(this.facultyMembers)
}
}
