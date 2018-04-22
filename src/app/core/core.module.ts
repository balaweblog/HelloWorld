import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { BlogsService } from './blogs.service';
import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [ ],
  providers: [BlogsService, LoginService]
})
export class CoreModule { }
