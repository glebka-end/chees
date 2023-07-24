import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {AuthGuard} from "./shared/Interceptor-and-authGuard/auth.guard";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {ProfilePageComponent} from "./overview-page/profile-page/profile-page.component";
import {ProfileFriendComponent} from "./overview-page/profile-friend/profile-friend.component";
import {LoginPageMComponent} from "./modules/login/login-page-m/login-page-m.component";
import {RegisterPageMComponent} from "./modules/register-page-m/register-page-m/register-page-m.component";
import {EditProfileMComponent} from "./modules/edit-profile/edit-profile-m/edit-profile-m.component";

const routes: Routes = [

  {
    path: '', component: AuthLayoutComponent, children:[
      {path: '', redirectTo:'/login' ,pathMatch:'full'},
      {path: 'login' , component: LoginPageMComponent},
      {path: 'register' , component:    RegisterPageMComponent},
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate:[AuthGuard] ,children:[
      { path: 'profilee/:id', component: ProfileFriendComponent},
      {path: 'overview' , component: OverviewPageComponent, children:[
         {path: 'edit' , component: EditProfileMComponent},
          {
            path: 'profile', component: ProfilePageComponent, children: [


              {path: 'profilee/:id', component: ProfileFriendComponent},
            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
