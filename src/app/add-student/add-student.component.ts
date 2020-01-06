import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAllFiliaire().subscribe(data =>{
      this.filiaires=data;
      console.log(this.filiaires[0].filiaireName)
      })
  }
  idStudent;
  filiaires;
  filiereId;
  onSubmit(form: NgForm) {
    var student = { firstName: form.value["firstName"],
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
  this.dataService.createStudent(student).subscribe(data =>{
    console.log(data)
    console.log(data["id"])
    this.idStudent=data["id"];
    })

  var inscription = {
    niveau: form.value["niveau"],
    dateIns: form.value["dateIns"],
    moyAns: form.value["moyAns"],
  }

  console.log("***********"+this.filiereId)
  
  this.dataService.addInscription(this.idStudent,this.filiereId,inscription).subscribe(data =>{
  })


  }


}

