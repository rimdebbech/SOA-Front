import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { StudentBarCharComponent } from './student-bar-char/student-bar-char.component';
import{StudentPieCharComponent} from './student-pie-char/student-pie-char.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatTableModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
	
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import { StatistiqueComponent } from './statistique/statistique.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminBarCharComponent } from './admin-bar-char/admin-bar-char.component';
import { AdminDoughnutChartComponent } from './admin-doughnut-chart/admin-doughnut-chart.component';
import { AddInscriComponent } from './add-inscri/add-inscri.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    DialogBoxComponent,
    StudentBarCharComponent,
    StudentPieCharComponent,
    StatistiqueComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    AdminListComponent,
    AdminBarCharComponent,
    AdminDoughnutChartComponent,
    AddInscriComponent,
    AddAdminComponent,
    UpdateAdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    ChartsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
