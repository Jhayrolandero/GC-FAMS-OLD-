import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMonthScrollComponent } from './schedule-month-scroll.component';

describe('ScheduleMonthScrollComponent', () => {
  let component: ScheduleMonthScrollComponent;
  let fixture: ComponentFixture<ScheduleMonthScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleMonthScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleMonthScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
