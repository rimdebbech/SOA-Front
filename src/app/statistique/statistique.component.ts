import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor(private dataService:DataService) { }

  moy_anc=15;
  date_ins="2019";
  filiaireId=1;
  resultat;

  ngOnInit() {
  
  }

  submit(){
    console.log("hey")
    this.dataService.getReussite(15.0,"2019",1).subscribe(data =>{
      this.resultat = data;
      console.log(this.resultat)
    })
  }
 

}
