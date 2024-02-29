import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-schedule-month-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-month-scroll.component.html',
  styleUrl: './schedule-month-scroll.component.css'
})
export class ScheduleMonthScrollComponent {
  @Input() currMonth!: string;
  @Input() selectedMonth!: string;
}
