import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [

  {path : 'student-list', component : StudentListComponent},
  {path : 'teacher-list', component : StudentListComponent},
  {path : 'add-student',  component : StudentListComponent},
  {path : 'add-teacher',  component : StudentListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
