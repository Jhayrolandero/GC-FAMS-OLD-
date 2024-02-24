import { Component } from '@angular/core';
import { CommunityExtensionService } from '../../services/faculty/community-extension.service';
import { CommunityExtension } from '../../services/faculty/community-extension';

@Component({
  selector: 'app-community-extensions',
  standalone: true,
  imports: [],
  templateUrl: './community-extensions.component.html',
  styleUrl: './community-extensions.component.css'
})
export class CommunityExtensionsComponent {
  commex: CommunityExtension[] = [];

  constructor(private commService: CommunityExtensionService) {
    this.commex = this.commService.getAllCommex();
  }
}
