import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'create-lesson',
    templateUrl: './create-lesson.component.html',
    styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {

    private static readonly DRAFT_STORAGE = 'create-lesson-draft';

    form: FormGroup;

    constructor(private fb: FormBuilder) {

        this.form = this.fb.group({
            description: ['', Validators.required],
            url: ['', Validators.required],
            longDescription: ['']
        });

    }

    ngOnInit() {
        const draft = sessionStorage.getItem(CreateLessonComponent.DRAFT_STORAGE);

        if(draft) {
            this.form.setValue(JSON.parse(draft));
        }

        this.form.valueChanges
        .filter(() => this.form.valid)
        .do(validValue => sessionStorage.setItem(CreateLessonComponent.DRAFT_STORAGE, JSON.stringify(validValue)))
        .subscribe();
    }

}
