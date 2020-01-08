import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-student-pie-char',
  templateUrl: './student-pie-char.component.html',
  styleUrls: ['./student-pie-char.component.css']
})
export class StudentPieCharComponent implements OnInit {
  public nbf : BigInteger;
  public nbg : BigInteger;
  public pieChartLabels = ['Femme', 'Homme'];
  public pieChartData :any = [];
  public pieChartType = 'pie';
  constructor(private dataService:DataService) { }

  
  ngOnInit() {
    const fObservable = this.dataService.getnbStudentbyGender("Femme");
    fObservable.subscribe((data : BigInteger) =>{
     this.nbf = data;
     console.log("Femme =")
     console.log(data);
     this.pieChartData.push(data);
     console.log(this.pieChartData);
     

  })
  const gObservable = this.dataService.getnbStudentbyGender("Homme");
  gObservable.subscribe((data : BigInteger) =>{
    this.nbg = data;
   this.pieChartData.push(data);
    console.log(data);
console.log(this.pieChartData);
})

}

  
}




