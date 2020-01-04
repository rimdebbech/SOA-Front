import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPieCharComponent } from './student-pie-char.component';

describe('StudentPieCharComponent', () => {
  let component: StudentPieCharComponent;
  let fixture: ComponentFixture<StudentPieCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPieCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPieCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
