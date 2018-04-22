import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule
  ],
  exports: [
    BlogsComponent,
    TodoComponent
  ],
  declarations: [BlogsComponent, TodoComponent]
})
export class BlogsModule { }
