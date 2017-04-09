import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from './event-bus';
import { testLessons } from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-exp',
  templateUrl: './event-bus-exp.component.html',
  styleUrls: ['./event-bus-exp.component.css']
})
export class EventBusExpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Event Bus Comp broadcasted data...');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons.slice(0));
  }

}
