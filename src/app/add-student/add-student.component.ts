import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

 /*
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService){}
  ngOnInit() {

    
    this.dataService.getAllFiliaire().subscribe(data =>{
      this.filiaires=data;
      })
  }

  
  idStudent;
  filiaires;
  filiereId;
  student;
  inscription;
  id;
  form: NgForm;

  /*
  onSubmit(form: NgForm) {


  this.student = { firstName: form.value["firstName"],
            lastName: form.value["lastName"],
            emailId: form.value["emailId"],
            dateOfbirth : form.value["dateOfbirth"],
            placeOfbirth: form.value["placeOfbirth"],
            sexe : form.value["sexe"],
            address : form.value["address"],
            nationality : form.value["nationality"],
            tel : form.value["tel"],
            password : form.value["password"]
          };
        

  this.dataService.createStudent(this.student).subscribe(data => {
    this.idStudent=data["id"];
    this.inscription = {
      niveau: form.value["niveau"],
      dateIns: form.value["dateIns"],
      moyAnc: form.value["moyAnc"],
      nbAbscence : form.value["nbAbscence"]
    }
    console.log("***********"+this.filiereId+this.inscription+this.idStudent)
    this.dataService.addInscription(this.idStudent,this.filiereId,this.inscription).subscribe(data =>{})
  })
}

}
*/
constructor(private formBuilder: FormBuilder,private router: Router, private dataService: DataService) { }

addForm: FormGroup;
sexes = ["Homme","Femme","Other"]
ngOnInit() {

  this.addForm = this.formBuilder.group({
    id: [],
    emailId:['', Validators.required],
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

}

onSubmit() {
  console.log(this.addForm.value)
  this.dataService.createStudent(this.addForm.value)
    .subscribe( data => {
      var idStudent = data["id"];
      this.router.navigate(['add-inscri/',idStudent]);
    });
}

}
