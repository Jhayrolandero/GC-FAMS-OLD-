import { Component, OnInit } from '@angular/core';
import { CommunityExtensionService } from '../../services/faculty/community-extension.service';
import { CommunityExtension } from '../../services/faculty/community-extension';
import { OtherCommexComponent } from './other-commex/other-commex.component';
@Component({
  selector: 'app-community-extensions',
  standalone: true,
  imports: [OtherCommexComponent],
  templateUrl: './community-extensions.component.html',
  styleUrl: './community-extensions.component.css'
})
export class CommunityExtensionsComponent implements OnInit{
  commex: CommunityExtension[] = [];

  constructor(private commService: CommunityExtensionService){}

  getCommex():void {
    this.commService.getAllCommex().subscribe(
      commex => this.commex = commex
    )
  }
  ngOnInit(): void {
    this.getCommex()
  }
}
