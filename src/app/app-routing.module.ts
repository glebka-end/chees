import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {EditProfileComponent} from "./overview-page/edit-profile/edit-profile.component";



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
      {path: 'overview' , component: EditProfileComponent, children:[
       //   {path: 'edit' , component: EditProfileComponent},
        ] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
