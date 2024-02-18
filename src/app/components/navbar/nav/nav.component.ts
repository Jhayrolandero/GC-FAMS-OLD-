import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
[x: string]: any;
  @Input('title') navTitle = ''
  @Input('source') imgSource =  ''
  urlTitle!: string;

  ngOnInit(): void {
    this.urlTitle = this.navTitle.replace(" ", "-").toLowerCase();
    console.log(this.urlTitle);
  }

  changeImage(){
    this.imgSource = "Blue" + this.imgSource;
  }

  revertImage(){
    this.imgSource = this.imgSource.replaceAll('Blue', '');
  } 
}
