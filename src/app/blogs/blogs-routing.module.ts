import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { TodoComponent } from './todo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent},
  { path: 'todos', component: TodoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class BlogsRoutingModule { }
