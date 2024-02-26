import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FacultyBoxComponent } from '../../components/admin/faculty-members/faculty-box/faculty-box.component';
import { FacultymembersService } from '../../services/admin/facultymembers.service';
import { NgFor } from '@angular/common';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { FacultySectionComponent } from './faculty-section/faculty-section.component';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-faculty-members',
  standalone: true,
  imports: [FacultyBoxComponent, NgFor, PaginationComponent, FacultySectionComponent,  NgApexchartsModule],
  providers: [FacultymembersService],
  templateUrl: './faculty-members.component.html',
  styleUrl: './faculty-members.component.css'
})

export class FacultyMembersComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  facultyMembers: any = [];
  fullTime: number = 0;
  partTime: number = 0;
  fulltimeInclass: number = 0;
  parttimeInclass: number = 0;

  constructor( private facultyService: FacultymembersService ){
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
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
