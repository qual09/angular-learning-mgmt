import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { CourseListComponent } from './course-list.component';
import { CourseService } from '../../services/course.service';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      imports: [HttpClientModule],
      providers: [CourseService]
    })
      .compileComponents();   // compile template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have filter by option', () => {
    const fixture = TestBed.createComponent(CourseListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.courseListTools div').textContent).toContain('Filter by');
  });

});
