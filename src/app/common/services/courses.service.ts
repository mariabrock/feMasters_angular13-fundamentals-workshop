import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course [] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'Javascript: The hardest parts EVER',
      description: 'Learn Javascript like a pro! with Will',
      percentComplete: 66,
      favorite: true
    },
    {
      id: '3',
      title: 'Rapid Application Development Patterns',
      description: 'THIS MUST BE DONE BY 3:30 OR ELSE! Dont forget!',
      percentComplete: 98,
      favorite: true
    },
  ]

}