import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Interfaces/course';
import { CourseWork } from '../Interfaces/coursework';
const COURSEWORK_API = 'http://localhost:4000/coursework';
@Injectable({
  providedIn: 'root',
})
export class CourseWorkService {
  constructor(private http: HttpClient) {}

  addCoursework(file: File, id: number): Observable<any> {
    // TODO: modify this
    return this.http.post<Course>(`${COURSEWORK_API}/add/${id}`, file);
  }

  getAllCourseworkById(id: number): Observable<any> {
    return this.http.get<CourseWork[]>(`${COURSEWORK_API}/${id}`);
  }
}
