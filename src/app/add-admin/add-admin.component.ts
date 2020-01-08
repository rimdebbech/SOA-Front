import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private dataService: DataService) { }

addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id:[],
      emailId: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfbirth : ['', Validators.required],  
      address : ['', Validators.required],
      salary : ['', Validators.required], 
      post : ['', Validators.required], 
      password : ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.addForm.value)
    this.dataService.createAdmin(this.addForm.value)
      .subscribe( data => {
        console.log(this.addForm.value)
        var id = data["id"];
        this.router.navigate(['admin-list/',id]);
      });
  }
}
