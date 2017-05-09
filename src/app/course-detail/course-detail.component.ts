import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from "../shared/model/course";
import { Lesson } from "../shared/model/lesson";
import { User } from "../shared/model/user";
import * as _ from 'lodash';
import { CoursesService } from "../services/courses.service";
import { NewsletterService } from "../services/newsletter.service";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;
    user$: Observable<User>;

    constructor(private route: ActivatedRoute,
        private coursesService: CoursesService,
        private newsletterService: NewsletterService,
        private userService: UserService) {

    }

    ngOnInit() {
        this.user$ = this.userService.user$;

        this.course$ = this.route.params
            .switchMap(params => this.coursesService.findCourseByUrl(params['id']))
            .first()
            .publishLast().refCount();

        this.lessons$ = this.course$.switchMap(course => this.coursesService.findLessonsForCourse(course.id))
            .first()
            .publishLast().refCount();
    }

    loginAsJohn() {
        this.userService.login('john@gmail.com', 'test123').subscribe();
    }

}
