import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: '/login.component.html',
  styleUrls: ['/login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private loginservice: LoginService) { }
  loading = false;
  returnUrl = '/userdetails';
  ngOnInit() {
  }
  login() {
    this.loading = true;
    if (this.loginservice.login(this.username, this.password).username != null) {
      this.router.navigate([this.returnUrl]);
    }
}
}
