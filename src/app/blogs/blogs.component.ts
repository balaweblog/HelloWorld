import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../core/blogs.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private blogservice: BlogsService) { }

  ngOnInit() {
    this.blogservice.getposts().subscribe(posts => this.posts = posts);
  }

}
