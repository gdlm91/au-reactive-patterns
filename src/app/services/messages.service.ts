import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MessagesService {

  private errorsSubject = new BehaviorSubject<string[]>([]);

  errors$: Observable<string[]> = this.errorsSubject.asObservable();

  constructor() { }

  error(...errors: string[]) {
    this.errorsSubject.next(errors);
  }

}
