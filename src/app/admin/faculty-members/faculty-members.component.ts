import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/navbar/sidebar/sidebar.component';

@Component({
  selector: 'app-faculty-members',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './faculty-members.component.html',
  styleUrl: './faculty-members.component.css'
})
export class FacultyMembersComponent {

}
