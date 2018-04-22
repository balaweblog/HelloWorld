import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { Post } from '../model/post';
import { Todo } from '../model/todo';

@Injectable()
export class BlogsService {

   postsurl = 'https://jsonplaceholder.typicode.com/posts';
   todourl ='https://jsonplaceholder.typicode.com/todos';
  constructor(private http: Http) { }

  getposts(): Observable<Post[]> {
    return this.http.get(this.postsurl).map((response: Response) => <Post[]>response.json());
  }
  gettodos(): Observable<Todo[]> {
    return this.http.get(this.todourl).map((response: Response) => <Todo[]>response.json());
  }
}
