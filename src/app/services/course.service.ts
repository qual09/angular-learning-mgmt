import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Course } from '../models/course';
import { COURSES, COURSE } from '../mocks/mock-courses';

// MOCK
// import { COURSES } from '../mocks/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseListUrl: string;
  private courseDetailsUrl: string;

  constructor(private http: HttpClient) {
    this.courseListUrl = environment.courseDetailsUrl;
    this.courseDetailsUrl = environment.courseDetailsUrl;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCourseList(): Observable<Course[]> {
    return of(COURSES); //MOCK
    const url = this.courseListUrl;
    return this.http.get<Course[]>(url).pipe(
      tap(() => console.log('### CourseService ### getCourseList')),
      catchError(this.handleError<Course[]>('getCourseList', []))
    );
  }

  getCourseDetails(id: number): Observable<Course> {
    return of(COURSE); //MOCK
    const url = `${this.courseDetailsUrl}/${id}`;
    return this.http.get<Course>(url).pipe(
      tap(() => console.log('### CourseService ### getCourseDetails')),
      catchError(this.handleError<Course>('getCourseDetails'))
    );
  }

}
