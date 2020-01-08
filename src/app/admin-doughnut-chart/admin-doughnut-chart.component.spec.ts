import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoughnutChartComponent } from './admin-doughnut-chart.component';

describe('AdminDoughnutChartComponent', () => {
  let component: AdminDoughnutChartComponent;
  let fixture: ComponentFixture<AdminDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
