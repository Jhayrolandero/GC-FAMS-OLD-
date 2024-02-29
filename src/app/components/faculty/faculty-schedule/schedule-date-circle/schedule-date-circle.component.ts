import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-date-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-date-circle.component.html',
  styleUrl: './schedule-date-circle.component.css'
})
export class ScheduleDateCircleComponent {
  @Input() i!: number;
  @Input() date!: number;
  
}
