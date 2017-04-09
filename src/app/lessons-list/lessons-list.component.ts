import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus-exp/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    //For timing, need to init on constructor
    console.log('Lessons List Comp is registered as observer...');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this)
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('Lessons List Comp received data...');
    this.lessons = data;
  }

}
