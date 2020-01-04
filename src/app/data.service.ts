import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = 'http://localhost:8080/api/Rest/';

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/students');
  }
  getnbStudentbyGender(sexe : string):Observable<any> {
    return this.http.get(`${this.baseUrl}/student/${sexe}/gender`);
    }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'/students', student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/students/${id}`, { responseType: 'text' });
  }

  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/students/${id}`);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/students/${id}`, value);
  }
  /******************************************* */

  getReussite(moy_anc:number,date_ins:string,filiaireId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/inscription/${moy_anc}/${date_ins}/${filiaireId}`+'/reuissite');
  }
  
}                                           