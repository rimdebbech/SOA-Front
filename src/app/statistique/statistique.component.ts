import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
@Input() val : number;
  constructor(private dataService:DataService) { }

  moy_anc:number;
  date_ins="2019";
  filiaireId=1;
  resultat;

  ngOnInit() {
  
  }

  submit(){
    console.log("hey")
    this.dataService.getReussite(this.moy_anc,"2018-2019",4).subscribe(data =>{
      console.log(data);
      this.resultat = data;
      console.log(this.resultat)
    })
  }
 

}
