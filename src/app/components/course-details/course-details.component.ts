import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course: Course;
  courseId: number;
  subscription: Subscription;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this.getCourse(this.courseId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCourse(id: number) {
    this.subscription = this.courseService.getCourseDetails(id).subscribe(course => this.course = course);
  }

}
