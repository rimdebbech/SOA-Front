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
<<<<<<< HEAD
import { from } from 'rxjs';
=======
import { StatistiqueComponent } from './statistique/statistique.component';
>>>>>>> 9c9bc92442b95546bbd4a180ca4ef4b041511d21
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    DialogBoxComponent,
<<<<<<< HEAD
    StatStudentComponent,
    StudentBarCharComponent,
    StudentPieCharComponent
=======
    StatistiqueComponent
>>>>>>> 9c9bc92442b95546bbd4a180ca4ef4b041511d21
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
<<<<<<< HEAD
    ChartsModule
=======
    MatSelectModule
>>>>>>> 9c9bc92442b95546bbd4a180ca4ef4b041511d21
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
