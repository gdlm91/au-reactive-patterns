import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NewsletterService } from "app/services/newsletter.service";
import { Observable } from "rxjs/Observable";
import { User } from "../shared/model/user";
import { UserService } from "../services/user.service";

@Component({
    selector: 'newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {

    user$: Observable<User>;
    firstName: string;

    constructor(
        private newsletterService: NewsletterService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.user$ = this.userService.user$;
    }

    subscribeToNewsletter(emailField) {
        this.newsletterService.subscribeToNewsletter(emailField)
            .subscribe(
            () => {
                emailField.value = '';
                alert('Subscription successful ...');
            },
            console.error
            );
    }


}
