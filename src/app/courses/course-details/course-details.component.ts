import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent  implements OnInit{

  // breaking the sharing portion of state
  @Input() set selectedCourse(value: Course) {
    if(value?.title) {
      this.originalTitle = value.title;
    }
    this.currentCourse = Object.assign({}, value);
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  currentCourse: Course;
  originalTitle: string;

  constructor() {}

  ngOnInit(): void {}
  
  saveCourse(course: Course) {
    this.courseSaved.emit(course);
  }

  cancelCourse() {
    this.courseCancelled.emit();
  }
}
