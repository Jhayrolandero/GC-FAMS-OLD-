import { Component, Input, OnInit } from '@angular/core';
import { FacultymembersService } from '../../../../services/admin/facultymembers.service';
import { NgClass, NgFor } from '@angular/common';
import { FacultyMember } from '../../../../services/admin/facultymembers';
import { DateSelectComponent } from '../../date-select/date-select.component';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-faculty-box',
  standalone: true,
  imports: [NgFor, NgClass, DateSelectComponent, NgOptimizedImage],
  providers: [FacultymembersService],
  templateUrl: './faculty-box.component.html',
  styleUrl: './faculty-box.component.css'
})
export class FacultyBoxComponent{

  isVisible: boolean = false;
  @Input('member') member: FacultyMember = {
    id:0, name: '', units: 0, status: '', employment: '', isVisible: false, profileIMG: ''
  };

  toggle(member: FacultyMember):void {
    member.isVisible = !member.isVisible;
  }
}
