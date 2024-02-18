import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isFaculty: boolean;
  accountPath: string;

  constructor(private route: ActivatedRoute){
    this.accountPath = this.route.snapshot.url[0].path;
    this.isFaculty = this.accountPath === "faculty";
  }
}
