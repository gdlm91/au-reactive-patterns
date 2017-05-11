import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, RoutesRecognized, NavigationStart } from "@angular/router";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean>
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loading$ = this.router.events
      .map(event => event instanceof NavigationStart || event instanceof RoutesRecognized)
  }

}
