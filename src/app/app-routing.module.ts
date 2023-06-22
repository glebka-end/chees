import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {EditProfileComponent} from "./overview-page/edit-profile/edit-profile.component";
import {ProfileCPageComponent} from "./profile-c-page/profile-c-page.component";
import {TasksPageComponent} from "./tasks-page/tasks-page.component";
import {DebutsPageComponent} from "./debuts-page/debuts-page.component";
import {PlayPageComponent} from "./play-page/play-page.component";
import {ArticlesPageComponent} from "./articles-page/articles-page.component";



const routes: Routes = [
  //{path:'login',component: LoginPageComponent}
  {
    path: '', component: AuthLayoutComponent, children:[
      {path: '', redirectTo:'/login' ,pathMatch:'full'},
      {path: 'login' , component: LoginPageComponent},
      {path: 'register' , component:    RegisterPageComponent},
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate:[AuthGuard] ,children:[
      {path: 'overview' , component: OverviewPageComponent},
      {path: 'profile-y' , component: ProfileCPageComponent},
      {path: 'tasks' , component: TasksPageComponent},
      {path: 'debuts' , component:DebutsPageComponent },
      {path: 'play' , component: PlayPageComponent},
      {path: 'articles' , component: ArticlesPageComponent},

        ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
