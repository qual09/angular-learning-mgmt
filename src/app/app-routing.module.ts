import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/courseList', pathMatch: 'full' },
  { path: 'courseList', component: CourseListComponent },
  { path: 'courseDetails/:id', component: CourseDetailsComponent },
  { path: '**', component: CourseListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
