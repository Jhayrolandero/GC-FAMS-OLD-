import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMilestoneHistoryComponent } from './faculty-milestone-history.component';

describe('FacultyMilestoneHistoryComponent', () => {
  let component: FacultyMilestoneHistoryComponent;
  let fixture: ComponentFixture<FacultyMilestoneHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyMilestoneHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyMilestoneHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
