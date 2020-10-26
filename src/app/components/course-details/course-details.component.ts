import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  courseId: number;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this.getCourse(this.courseId);
  }

  getCourse(id: number) {
    this.courseService.getCourseDetails(id).subscribe(course => this.course = course);
  }

}
