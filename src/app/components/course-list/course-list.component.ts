import { Component, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  courseList: Course[];
  courseListFiltered: Course[];
  searchTerm: string;
  filterStatusTerm: string = "";
  statusList: string[] = [];
  subscription: Subscription;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourseList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCourseList() {
    this.subscription = this.courseService.getCourseList().subscribe(result => {
      if (result) {
        this.courseList = result;
        this.courseListFiltered = result;

        // Append status list to filter
        this.statusList = [];
        result.forEach(course => {
          if (course.status && this.statusList.indexOf(course.status) === -1)
            this.statusList.push(course.status);
        });
      }
    });
  }

  clearFilter() {
    this.filterStatusTerm = "";
    this.searchTerm = "";
    this.search();
  }

  search() {
    let term = this.searchTerm;
    this.courseList = this.courseListFiltered.filter((courseElement) => {
      let allProperties = courseElement.status + courseElement.name;
      courseElement.instructors.forEach(instructor => {
        allProperties += instructor.name;
      });
      return allProperties.toLowerCase().includes(term.toLowerCase());
    });
  }

}
