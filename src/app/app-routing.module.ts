import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StatStudentComponent } from './stat-student/stat-student.component';
import { StudentBarCharComponent } from './student-bar-char/student-bar-char.component';
import { StudentPieCharComponent } from './student-pie-char/student-pie-char.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [

  {path : 'student-list', component : StudentListComponent},
  {path : 'teacher-list', component : StudentListComponent},
  {path : 'add-student',  component : AddStudentComponent},
  {path : 'update-student/:id',  component : UpdateStudentComponent},
  {path : 'add-teacher',  component : StudentListComponent},
  {path : 'stat-student',  component : StatStudentComponent},
  {path : 'student-bar-char',  component : StudentBarCharComponent},
  {path : 'student-pie-char',  component : StudentPieCharComponent},
  {path : 'statistique',  component : StatistiqueComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
