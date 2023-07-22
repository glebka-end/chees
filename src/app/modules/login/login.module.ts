import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageMComponent } from './login-page-m/login-page-m.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [


    LoginPageMComponent
  ],
  exports: [
    LoginPageMComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class LoginModule { }
