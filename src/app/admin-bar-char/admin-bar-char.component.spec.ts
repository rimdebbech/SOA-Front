import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBarCharComponent } from './admin-bar-char.component';

describe('AdminBarCharComponent', () => {
  let component: AdminBarCharComponent;
  let fixture: ComponentFixture<AdminBarCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBarCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBarCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
