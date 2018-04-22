import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../core/blogs.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  constructor(private blogservice: BlogsService) { }

  ngOnInit() {
    this.blogservice.gettodos().subscribe(todo => this.todos = todo);
  }

}
