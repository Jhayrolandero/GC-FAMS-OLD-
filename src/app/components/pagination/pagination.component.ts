import { Component, OnInit } from '@angular/core';
import { FacultymembersService } from '../../services/admin/facultymembers.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  providers:[FacultymembersService],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {

  firstPage: number = 1
  lastPage: number = 1;
  currPage: number = 1;
  prev: boolean | number = false;
  next: boolean | number = false;
  pages: number[] = [];
  constructor(private facultyService: FacultymembersService) {}

  ngOnInit(): void {
    this.getPagination()
  }

  getPagination(): void {
    this.facultyService.getPagination()
    .subscribe(
      (page: any) => {
        this.firstPage = page.first;
        this.lastPage = page.last
        this.prev = page.prev;
        this.next = page.next
        for(let i = 1; i<=page.pages; i++) {
          this.pages.push(i);
        }

        console.log(page)
      }
    );
  }

  decrementPage(): void {
    this.currPage--;
  }

  incrementPage(): void {
    this.currPage++;
  }

  jumpPage(page: number): void {
    // console.log(page)
    this.currPage = page;
  }
}
