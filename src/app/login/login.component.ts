import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() { }

  login(email: string, password: string) {
    this.userService.login(email, password)
      .subscribe(
        () => {
          alert('Login Successful');
          this.router.navigateByUrl('/home');
        },
        console.error
      );
  }

}
