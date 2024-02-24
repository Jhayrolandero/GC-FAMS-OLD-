import { Component, OnInit } from '@angular/core';
import { FacultyBoxComponent } from '../../components/admin/faculty-members/faculty-box/faculty-box.component';
import { FacultymembersService } from '../../services/admin/facultymembers.service';
import { FacultyMember } from '../../services/admin/facultymembers';
import { NgFor } from '@angular/common';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { facultyMemberResource } from '../../services/admin/facultyMemberResource';
@Component({
  selector: 'app-faculty-members',
  standalone: true,
  imports: [FacultyBoxComponent, NgFor, PaginationComponent],
  providers: [FacultymembersService],
  templateUrl: './faculty-members.component.html',
  styleUrl: './faculty-members.component.css'
})

export class FacultyMembersComponent implements OnInit {

  facultyMembers: any = [];
  fullTime: number = 0;
  partTime: number = 0;
  fulltimeInclass: number = 0;
  parttimeInclass: number = 0;
  constructor( private facultyService: FacultymembersService ){

  }

  getFacultyMembers(params?: any): void {
    // console.log(this.facultyService.getURI(params))
    this.facultyService.getFacultyMembers(params)
        .subscribe(facultyMembers => {
          this.facultyMembers = facultyMembers.data

          this.fullTime = 0
          this.partTime = 0
          this.fulltimeInclass = 0
          this.parttimeInclass = 0

          this.facultyMembers.map( (members:any) => {
            if(members.employment === 'Full-Time') this.fullTime++;
            else if(members.employment === 'Part-Time') this.partTime++;

            if(members.status === 'In-Class' && members.employment === 'Full-Time') this.fulltimeInclass++
            else if(members.status === 'In-Class' && members.employment === 'Part-Time') this.parttimeInclass++
          })
        });
  }

  ngOnInit(): void {
    this.getFacultyMembers();
  }
}
