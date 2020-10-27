import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList: Course[];
  courseListFiltered: Course[];
  searchTerm: string;
  filterStatusTerm: string = "";

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList() {
    this.courseService.getCourseList().subscribe(result => {
      this.courseList = result;
      this.courseListFiltered = result;
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
