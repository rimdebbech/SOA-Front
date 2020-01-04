import { DataService } from '../data.service';
import { Component, ViewChild } from '@angular/core';
 
import { MatDialog, MatTable, MatTableDataSource } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent{
  displayedColumns: string[] = 
    ['id','firstName', 'lastName', 'emailId', 'dateOfbirth',
    'placeOfbirth','sexe','address','tel','nationality','password','update','delete'
  ];
  dataSource ;
  date_ins;
  
  constructor(private dataService:DataService,public dialog: MatDialog) { }

  ngOnInit() {
  this.dataService.getStudentList().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
  })
  }

  public doFilter = (value: any) => {
   // this.dataSource.filter = value.trim().toLocaleLowerCase();

   this.dataSource = new MatTableDataSource(this.dataSource);
   this.dataSource.filterPredicate = function(data: any, filterValue: string) {
  return data.specificColumn /** replace this with the column name you want to filter */
    .trim()
    .toLocaleLowerCase().indexOf(filterValue.trim().toLocaleLowerCase()) >= 0;
};
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
    
  }
 
  public redirectToDelete = (id: number) => {
    this.dataService.deleteStudent(id).subscribe(data =>{
    })
    this.ngOnInit()
    
  }
}