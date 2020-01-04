import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-bar-char',
  templateUrl: './student-bar-char.component.html',
  styleUrls: ['./student-bar-char.component.css']
})
export class StudentBarCharComponent implements OnInit {

  constructor(private dataService:DataService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public tabf : BigInteger[] = [];
  public tabg : BigInteger[] = [];

 
  ngOnInit() {
    const fObservable = this.dataService.getnbStudentbyGender("Femme");
    fObservable.subscribe((data : BigInteger) =>{
     this.tabf.push(data);

  })
  const gObservable = this.dataService.getnbStudentbyGender("Homme");
  gObservable.subscribe((data : BigInteger) =>{

    this.tabg.push(data);


})
}
public barChartLegend = true;
public barChartData = [
  {data: this.tabf, label: 'Femme'},
  {data: this.tabg, label: 'Homme'}
];

}
