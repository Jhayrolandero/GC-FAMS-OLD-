import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDateCircleComponent } from './schedule-date-circle.component';

describe('ScheduleDateCircleComponent', () => {
  let component: ScheduleDateCircleComponent;
  let fixture: ComponentFixture<ScheduleDateCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleDateCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleDateCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
