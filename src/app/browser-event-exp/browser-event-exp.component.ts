import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-exp',
  templateUrl: './browser-event-exp.component.html',
  styleUrls: ['./browser-event-exp.component.css']
})
export class BrowserEventExpComponent implements OnInit {

  hoverSection: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');

    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  unsubscribe() {
    console.log('Called unsubscribe()');

    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

function onMouseMove(ev) {
  console.log(ev);
}
