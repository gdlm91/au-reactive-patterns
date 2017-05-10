import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Lesson } from "../shared/model/lesson";
import { Http } from "@angular/http";

@Injectable()
export class LessonsPagerService {
  private static readonly PAGE_SIZE = 2;

  private subject = new BehaviorSubject<Lesson[]>([]);

  lessonsPage$: Observable<Lesson[]> = this.subject.asObservable();

  currentPageNumber = 1;

  private courseId: number;

  constructor(
    private http: Http
  ) { }

  loadFirstPage(courseId: number) {
    this.courseId = courseId;
    this.currentPageNumber = 1;

    this.loadPage(1);
  }

  previous() {
    if (this.currentPageNumber - 1 >= 1) {
      this.currentPageNumber -= 1;
      this.loadPage(this.currentPageNumber);
    }
  }

  next() {
    this.currentPageNumber += 1;
    this.loadPage(this.currentPageNumber);
  }

  loadPage(pageNumber: number) {
    this.http.get('/api/lessons', {
      params: {
        courseId: this.courseId,
        pageNumber,
        pageSize: LessonsPagerService.PAGE_SIZE
      }
    })
      .map(res => res.json().payload)
      .subscribe(
      lessons => this.subject.next(lessons)
      )
  }

}
