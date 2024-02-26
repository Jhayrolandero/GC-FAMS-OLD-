import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCommexComponent } from './other-commex.component';

describe('OtherCommexComponent', () => {
  let component: OtherCommexComponent;
  let fixture: ComponentFixture<OtherCommexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherCommexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherCommexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
