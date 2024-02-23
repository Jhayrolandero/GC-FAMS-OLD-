import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityExtensionsComponent } from './community-extensions.component';

describe('CommunityExtensionsComponent', () => {
  let component: CommunityExtensionsComponent;
  let fixture: ComponentFixture<CommunityExtensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityExtensionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
