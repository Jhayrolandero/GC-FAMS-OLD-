import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMilestoneCalendarComponent } from './faculty-milestone-calendar.component';

describe('FacultyMilestoneCalendarComponent', () => {
  let component: FacultyMilestoneCalendarComponent;
  let fixture: ComponentFixture<FacultyMilestoneCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyMilestoneCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyMilestoneCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
