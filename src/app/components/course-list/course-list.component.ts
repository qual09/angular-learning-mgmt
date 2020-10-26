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

  search() {
    let term = this.searchTerm;
    this.courseList = this.courseListFiltered.filter(function (courseElement) {
      let allProperties = courseElement.id + courseElement.status + courseElement.name;
      return allProperties.toLowerCase().includes(term.toLowerCase());
    });
  }

}
