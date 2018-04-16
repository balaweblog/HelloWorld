import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { UserdetailsComponent } from './userdetails.component';
import { EdituserComponent } from './edituser.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    RegisterComponent,
    UserdetailsComponent
  ],
  declarations: [RegisterComponent, UserdetailsComponent, EdituserComponent]
})
export class AdminModule { }
