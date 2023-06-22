import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import { OverviewPageComponent } from './overview-page/overview-page.component';
import {EditProfileComponent} from "./overview-page/edit-profile/edit-profile.component";
import {JwtInterceptor} from "./overview-page/services/jwtInterceptor";
// import { EditProfileComponent } from './overview-page/edit-profile/edit-profile.component';
// import { ProfileServiceComponent } from './overview-page/edit-profile/profile.service/profile.service.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    OverviewPageComponent,
    EditProfileComponent,


  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:TokenInterceptor,
    //  provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true

    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
