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
import{ StatStudentComponent} from './stat-student/stat-student.component';
import { StudentBarCharComponent } from './student-bar-char/student-bar-char.component';
import{StudentPieCharComponent} from './student-pie-char/student-pie-char.component';
import { FormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    DialogBoxComponent,
    StatStudentComponent,
    StudentBarCharComponent,
    StudentPieCharComponent,
    StatistiqueComponent
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
    MatSelectModule
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
