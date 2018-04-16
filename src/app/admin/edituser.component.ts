import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from './user';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  password: string;
  constructor( private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.firstname = this.route.snapshot.paramMap.get('firstname');
    this.lastname = this.route.snapshot.paramMap.get('lastname');
    this.username = this.route.snapshot.paramMap.get('username');
    this.password = this.route.snapshot.paramMap.get('password');
  }
  update() {
    this.router.navigate(['/userdetails']);
  }
  cancel() {
    this.router.navigate(['/userdetails']);
  }

}
