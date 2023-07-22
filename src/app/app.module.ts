import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import {OverviewPageComponent} from './overview-page/overview-page.component';
import {EditProfileComponent} from "./overview-page/edit-profile/edit-profile.component";
import {ProfilePageComponent} from './overview-page/profile-page/profile-page.component';
import {PostListComponent} from './overview-page/post-list/post-list.component';
import {FormsModule} from '@angular/forms';
import {CreatPostComponent} from './overview-page/creat-post/creat-post.component';
import {CommonModule} from "@angular/common";
import { ProfileFriendComponent } from './overview-page/profile-friend/profile-friend.component';
import { PostListFriendComponent } from './overview-page/post-list-friend/post-list-friend.component';
import {LoginModule} from "./modules/login/login.module";
import {RegisterPageMModule} from "./modules/register-page-m/register-page-m.module";
// import { EditProfileComponent } from './overview-page/edit-profile/edit-profile.component';
// import { ProfileServiceComponent } from './overview-page/edit-profile/profile.service/profile.service.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    OverviewPageComponent,
    EditProfileComponent,
    ProfilePageComponent,
    PostListComponent,
    CreatPostComponent,
    ProfileFriendComponent,
    PostListFriendComponent,



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
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LoginModule,
    RegisterPageMModule,



  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
