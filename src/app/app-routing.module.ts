import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentBarCharComponent } from './student-bar-char/student-bar-char.component';
import { StudentPieCharComponent } from './student-pie-char/student-pie-char.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminBarCharComponent } from './admin-bar-char/admin-bar-char.component';
import { AdminDoughnutChartComponent } from './admin-doughnut-chart/admin-doughnut-chart.component';

const routes: Routes = [

  {path : 'student-list', component : StudentListComponent},
  {path : 'teacher-list', component : StudentListComponent},
  {path : 'add-student',  component : AddStudentComponent},
  {path : 'add-teacher',  component : StudentListComponent},
  {path : 'student-bar-char',  component : StudentBarCharComponent},
  {path : 'student-pie-char',  component : StudentPieCharComponent},
  {path : 'statistique',  component : StatistiqueComponent},
  {path: 'admin-list' , component: AdminListComponent},
  {path: 'admin-bar-char' , component: AdminBarCharComponent},
  {path: 'admin-doughnut-chart' , component: AdminDoughnutChartComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
