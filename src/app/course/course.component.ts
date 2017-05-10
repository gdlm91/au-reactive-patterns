import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../shared/model/lesson";
import {CoursesHttpService} from "../services/courses-http.service";
import {Course} from "../shared/model/course";
import {LessonsPagerService} from "../services/lessons-pager.service";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    providers: [LessonsPagerService]
})
export class CourseComponent implements OnInit, OnDestroy {

    @Input()
    id: number;

    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;

    detail$: Observable<Lesson>;

    constructor(private coursesService: CoursesHttpService,
                private lessonsPager:LessonsPagerService) {

    }

    ngOnInit() {
        this.course$ = this.coursesService.findCourseById(this.id);
        this.lessons$ = this.lessonsPager.lessonsPage$;

        this.lessonsPager.loadFirstPage(this.id).subscribe(
            () => {},
            error => alert('error loading the first page')
        );
    }

    previousLessonsPage() {
        this.lessonsPager.previous().subscribe(
            () => {},
            error => alert('error loading the previous page')
        );
    }

    nextLessonsPage() {
        this.lessonsPager.next().subscribe(
            () => {},
            error => alert('error loading the next page')
        );
    }

    selectDetail(lesson:Lesson) {
        this.detail$ = this.coursesService.findLessonDetailById(lesson.url);
    }

    backToMaster() {
        this.detail$ = undefined;
    }

    ngOnDestroy() {
        console.log('destroying CourseComponent ...');
    }

}








