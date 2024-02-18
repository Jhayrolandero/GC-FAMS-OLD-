import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input('title') navTitle = ''
  @Input('source') imgSource =  ''

  changeImage(){
    this.imgSource = "Blue" + this.imgSource;
    console.log("added " + this.imgSource);
  }

  revertImage(){
    this.imgSource = this.imgSource.replaceAll('Blue', '');
    console.log("left " + this.imgSource);
  } 
}
