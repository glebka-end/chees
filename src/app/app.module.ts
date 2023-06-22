import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";

import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import {OverviewPageComponent} from './overview-page/overview-page.component';
import {EditProfileComponent} from "./overview-page/edit-profile/edit-profile.component";
import {JwtInterceptor} from "./overview-page/services/jwtInterceptor";
import {ProfileCPageComponent} from './profile-c-page/profile-c-page.component';
import {ProfileYPageComponent} from './profile-y-page/profile-y-page.component';
import {TasksPageComponent} from './tasks-page/tasks-page.component';
import {PlayPageComponent} from './play-page/play-page.component';
import {DebutsPageComponent} from './debuts-page/debuts-page.component';
import {ArticlesPageComponent} from './articles-page/articles-page.component';
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
    ProfileCPageComponent,
    ProfileYPageComponent,
    TasksPageComponent,
    PlayPageComponent,
    DebutsPageComponent,
    ArticlesPageComponent,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
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
export class AppModule {
}
