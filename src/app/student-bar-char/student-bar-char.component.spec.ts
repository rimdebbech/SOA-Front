import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBarCharComponent } from './student-bar-char.component';

describe('StudentBarCharComponent', () => {
  let component: StudentBarCharComponent;
  let fixture: ComponentFixture<StudentBarCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBarCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBarCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
