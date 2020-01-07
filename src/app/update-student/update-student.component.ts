import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private dataService:DataService,private route: ActivatedRoute) { }

  id;
  student;
  editForm: FormGroup;
  
  ngOnInit() {
/*
    this.id = this.route.snapshot.params['id'];
    if (this.id!=0){
      this.dataService.getStudent(parseInt(this.id)).subscribe(data => {
        console.log(data)
        this.student=data;

        this.form.setValue({
          firstName: this.student.firstName,
          lastName: this.student.lastName,
          emailId: this.student.emailId,
          dateOfbirth : this.student.dateOfbirth,
          placeOfbirth: this.student.placeOfbirth,
          sexe : this.student.sexe,
          address : this.student.address,
          nationality : this.student.nationality,
          tel : this.student.tel,
          password : this.student.password
      })   
    })
  }*/

  this.id = this.route.snapshot.params['id'];
    this.editForm = this.formBuilder.group({
      id: [],
      emailId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfbirth : ['', Validators.required], 
      placeOfbirth: ['', Validators.required], 
      sexe : ['', Validators.required], 
      address : ['', Validators.required],
      nationality : ['', Validators.required], 
      tel : ['', Validators.required], 
      password : ['', Validators.required],
    });
    this.dataService.getStudent(this.id)
      .subscribe( data => {
        console.log(data)
        this.editForm.setValue(data);
      });
}

onSubmit() {
  console.log(this.editForm.value)
  this.dataService.updateStudent(this.id,this.editForm.value).subscribe(data => {
    this.router.navigate(['student-list']);
  })
}

  

}
