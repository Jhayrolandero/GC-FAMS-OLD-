import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationHoursBlockComponent } from './consultation-hours-block.component';

describe('ConsultationHoursBlockComponent', () => {
  let component: ConsultationHoursBlockComponent;
  let fixture: ComponentFixture<ConsultationHoursBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationHoursBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultationHoursBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
