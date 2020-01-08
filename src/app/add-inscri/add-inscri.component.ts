import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-inscri',
  templateUrl: './add-inscri.component.html',
  styleUrls: ['./add-inscri.component.css']
})
export class AddInscriComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private dataService:DataService,private route: ActivatedRoute) { }

addForm: FormGroup;
addFiliare: FormGroup;
filiaires;
filiereId;
StudentId;
ngOnInit() {

  this.StudentId = this.route.snapshot.params['id'];

  this.addForm = this.formBuilder.group({
    niveau: ['', Validators.required],
    dateIns: ['', Validators.required],
    moyAnc : ['', Validators.required], 
    nbAbscence: ['', Validators.required]
  });

  
  this.dataService.getAllFiliaire().subscribe(data =>{
    this.filiaires=data;
    console.log( this.filiaires)
  })

}

onSubmit() {
  console.log( this.filiaires)
  console.log( this.filiereId)
  console.log(this.addForm.value)

  this.dataService.addInscription(this.StudentId,this.filiereId,this.addForm.value)
  .subscribe( data => {
    this.router.navigate(['student-list']);
  });
  
}


}
