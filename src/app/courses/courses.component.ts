import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false

}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1. Render courses in a list
  // 2. Select a course
  // 3. render selected course

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Javascript: The hardest parts EVER',
      description: 'Learn Javascript like a pro! with Will',
      percentComplete: 66,
      favorite: true
    }
  ];

  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  saveCourse(course) {
    console.log('SAVE COURSE', course);
  }

  deleteCourse(courseId) {
    console.log('DELETE COURSE', courseId);
  }

  reset() {
    this.selectCourse({...emptyCourse});
  }

  

}
