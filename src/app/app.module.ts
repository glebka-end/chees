import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {TokenInterceptor} from "./shared/Interceptor-and-authGuard/token.interceptor";
import {OverviewPageComponent} from './overview-page/overview-page.component';
import {ProfilePageComponent} from './overview-page/profile-page/profile-page.component';
import {PostListComponent} from './overview-page/post-list/post-list.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import { ProfileFriendComponent } from './overview-page/profile-friend/profile-friend.component';
import { PostListFriendComponent } from './overview-page/post-list-friend/post-list-friend.component';
import {LoginModule} from "./modules/login/login.module";
import {RegisterPageMModule} from "./modules/register-page-m/register-page-m.module";
import {EditProfileModule} from "./modules/edit-profile/edit-profile.module";
import {FriendRequestComponent} from "./modules/friend-request/friend-request/friend-request.component";





@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    OverviewPageComponent,
    ProfilePageComponent,
    PostListComponent,
    ProfileFriendComponent,
    PostListFriendComponent,
    FriendRequestComponent,



  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
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
    EditProfileModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
