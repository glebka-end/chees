import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { RouterModule } from '@angular/router';
import {EditProfileMComponent} from "../edit-profile/edit-profile-m/edit-profile-m.component";

@NgModule({
  declarations: [
    FriendRequestComponent
  ],
  exports: [
    FriendRequestComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FriendRequestModule { }
