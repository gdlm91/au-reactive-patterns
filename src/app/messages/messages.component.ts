import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessagesService } from "../services/messages.service";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]>;

  constructor(
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.errors$ = this.messageService.errors$;
  }

  close() {
    this.messageService.error();
  }

}
