import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  users: User[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.users.push(new User('user first name 1', 'alagumalai', 'bala', 'test'));
    this.users.push(new User('user2 ', 'alagumalai', 'bala', 'test'));
    this.users.push(new User('balamurugan', 'alagumalai', 'bala', 'test'));
    this.users.push(new User('balamurugan', 'alagumalai', 'bala', 'test'));
  }

  deleteuser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
  edituser(user: User) {
  this.router.navigate(['edituser', {firstname: user.firstname, lastname: user.lastname, username: user.username,
  password: user.password}]);
  }
}
