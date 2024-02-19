import { Component } from '@angular/core';
import { FacultyBoxComponent } from '../../components/admin/faculty-members/faculty-box/faculty-box.component';

@Component({
  selector: 'app-faculty-members',
  standalone: true,
  imports: [FacultyBoxComponent],
  templateUrl: './faculty-members.component.html',
  styleUrl: './faculty-members.component.css'
})
export class FacultyMembersComponent {

}
