import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  users: User[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.users.push( new User(this.firstName, this.lastName, this.username, this.password));
    this.router.navigate(['/userdetails']);
  }
  cancel() {
    this.router.navigate(['/userdetails']);
  }

}

