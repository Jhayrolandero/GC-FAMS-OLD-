import { Component } from '@angular/core';
import { SidebarComponent } from '../components/navbar/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from '../components/navbar/topnav/topnav.component';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, TopnavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
