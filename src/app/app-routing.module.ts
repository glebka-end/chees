import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {EditProfileComponent} from "./overview-page/edit-profile/edit-profile.component";
import {ProfilePageComponent} from "./overview-page/profile-page/profile-page.component";
import {ProfileFriendComponent} from "./overview-page/profile-friend/profile-friend.component";
import {LoginPageMComponent} from "./modules/login/login-page-m/login-page-m.component";
import {RegisterPageMComponent} from "./modules/register-page-m/register-page-m/register-page-m.component";

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
         {path: 'edit' , component: EditProfileComponent},
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
