import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Interfaces/student';
import { environment } from 'src/environments/environment';

const STUDENTS_API = `${environment.baseUrl}/students`;
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  createStudent(student: Student): Observable<any> {
    return this.http.post<Student>(STUDENTS_API, student);
  }

  getAllEnrolledDataByStudentId(id: number): Observable<any> {
    return this.http.get<any>(`${STUDENTS_API}/enroll/${id}`);
  }
}
