import { Component } from '@angular/core';
import { SidebarComponent } from '../components/navbar/sidebar/sidebar.component';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  ngOnInit(){
    console.log("kant!");
  }
}
