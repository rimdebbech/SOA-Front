import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private dataService:DataService,private route: ActivatedRoute) { }

  id;
  student;
  editForm: FormGroup;
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.editForm = this.formBuilder.group({
      id:[],
      emailId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfbirth : ['', Validators.required],  
      address : ['', Validators.required],
      salary : ['', Validators.required], 
      post : ['', Validators.required], 
      password : ['', Validators.required],

    });
    
  this.dataService.getAdmin(this.id)
  .subscribe( data => {
    console.log(data)
    this.editForm.setValue(data);
  });
}

onSubmit() {
  console.log(this.editForm.value)
  this.dataService.updateAdmin(this.id,this.editForm.value).subscribe(data => {
    this.router.navigate(['admin-list']);
  })
}

  

}



