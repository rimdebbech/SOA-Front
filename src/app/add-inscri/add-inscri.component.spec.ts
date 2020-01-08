import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInscriComponent } from './add-inscri.component';

describe('AddInscriComponent', () => {
  let component: AddInscriComponent;
  let fixture: ComponentFixture<AddInscriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInscriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
