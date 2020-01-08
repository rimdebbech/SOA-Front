import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
 
import { MatDialog, MatTable, MatTableDataSource } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  displayedColumns: string[] = 
  ['id','firstName', 'lastName', 'emailId', 'dateOfbirth',
  'address','salary','post','password','update','delete'
];
dataSource ;
date_ins;

constructor(private dataService:DataService,public dialog: MatDialog,private router: Router) { }

ngOnInit() {
this.dataService.getAdminList().subscribe(data =>{
  this.dataSource = new MatTableDataSource(data);
})
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}



@ViewChild(MatTable,{static:true}) table: MatTable<any>;

openDialog(action,obj) {
  obj.action = action;
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    width: '250px',
    data:obj
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result.event == 'Add'){
      this.addRowData(result.data);
    }else if(result.event == 'Update'){
      this.updateRowData(result.data);
    }else if(result.event == 'Delete'){
      this.deleteRowData(result.data);
    }
  });
}

addRowData(row_obj){
  var d = new Date();
  this.dataSource.push({
    id:d.getTime(),
    name:row_obj.name
  });
  this.table.renderRows();
  
}
updateRowData(row_obj){
  this.dataSource = this.dataSource.filter((value,key)=>{
    if(value.id == row_obj.id){
      value.name = row_obj.name;
    }
    return true;
  });
}
deleteRowData(row_obj){
  this.dataSource = this.dataSource.filter((value,key)=>{
    return value.id != row_obj.id;
  });
}

public redirectToDetails = (id: string) => {
  
}

public redirectToUpdate = (id: string) => {
  this.router.navigate(['update-admin/',id]);
}

public redirectToDelete = (id: number) => {
  this.dataService.deleteAdmin(id).subscribe(data =>{
  })
  this.ngOnInit()
  
}
}
