import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatStudentComponent } from './stat-student.component';

describe('StatStudentComponent', () => {
  let component: StatStudentComponent;
  let fixture: ComponentFixture<StatStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
