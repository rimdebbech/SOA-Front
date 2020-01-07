import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label, MultiDataSet } from 'ng2-charts';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-doughnut-chart',
  templateUrl: './admin-doughnut-chart.component.html',
  styleUrls: ['./admin-doughnut-chart.component.css']
})
export class AdminDoughnutChartComponent implements OnInit {
  public tab : number[] = [];

   constructor(private dataService:DataService) { }

  ngOnInit() {
    const fObservable = this.dataService.getnbAdminbySalary(500);
    fObservable.subscribe((data : number) =>{
     this.tab.push(data);

  })


  const gObservable = this.dataService.getnbAdminbySalary(1000);
  gObservable.subscribe((data : number) =>{

    this.tab.push(data);


})

const oObservable = this.dataService.getnbAdminbySalary(1500);
oObservable.subscribe((data : number) =>{
console.log(data);
  this.tab.push(data);


})
const lObservable = this.dataService.getnbAdminbySalary(2000);
lObservable.subscribe((data : number) =>{
console.log(data);
  this.tab.push(data);


})
const mObservable = this.dataService.getnbAdminbySalary(10000);
mObservable.subscribe((data : number) =>{
console.log(data);
  this.tab.push(data);


})
}
// PolarArea
public polarAreaChartLabels: Label[] = ['salaire >= 500', 'salaire >= 1000', 'salaire >= 1500', 'salaire >= 2000', 'salaire >= 1000'];
public polarAreaChartData: SingleDataSet = this.tab;
public polarAreaLegend = true;

public polarAreaChartType: ChartType = 'polarArea';


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
