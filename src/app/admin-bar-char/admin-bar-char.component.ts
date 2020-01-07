import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-admin-bar-char',
  templateUrl: './admin-bar-char.component.html',
  styleUrls: ['./admin-bar-char.component.css']
})
export class AdminBarCharComponent implements OnInit {

  constructor(private dataService:DataService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public tabf : BigInteger[] = [];
  public tabg : BigInteger[] = [];
  public tabo : BigInteger[] = [];
  public tabl : BigInteger[] = [];
  public tabm : BigInteger[] = [];
 
  ngOnInit() {
    const fObservable = this.dataService.getnbAdminbySalary(500);
    fObservable.subscribe((data : BigInteger) =>{
     this.tabf.push(data);

  })


  const gObservable = this.dataService.getnbAdminbySalary(1000);
  gObservable.subscribe((data : BigInteger) =>{

    this.tabg.push(data);


})

const oObservable = this.dataService.getnbAdminbySalary(1500);
oObservable.subscribe((data : BigInteger) =>{
console.log(data);
  this.tabo.push(data);


})
const lObservable = this.dataService.getnbAdminbySalary(2000);
lObservable.subscribe((data : BigInteger) =>{
console.log(data);
  this.tabl.push(data);


})
const mObservable = this.dataService.getnbAdminbySalary(10000);
mObservable.subscribe((data : BigInteger) =>{
console.log(data);
  this.tabm.push(data);


})
}
public barChartLegend = true;
public barChartData = [
  {data: this.tabf, label: '>= 500'},
  {data: this.tabg, label: '>= 1.000'},
  {data: this.tabo, label: '>= 1.500'},
  {data: this.tabl, label: '>= 2.000'},
  {data: this.tabm, label: '>= 10.000'}
];

}
