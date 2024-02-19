import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyBoxComponent } from './faculty-box.component';

describe('FacultyBoxComponent', () => {
  let component: FacultyBoxComponent;
  let fixture: ComponentFixture<FacultyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
