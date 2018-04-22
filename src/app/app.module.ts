import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './admin/userdetails.component';
import { EdituserComponent } from './admin/edituser.component';
import { RegisterComponent } from './admin/register.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TodoComponent } from './blogs/todo.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userdetails',  component: UserdetailsComponent },
  { path: 'edituser', component: EdituserComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'todos', component: TodoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    TodoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    CoreModule,
    LoginModule,
    AdminModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
