import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../shared/services/profile.service";
import {User, Follwing, Post} from "../../shared/interfaces";
import { RouterModule } from '@angular/router'


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: User | null = null;
  userfollwing: Follwing[] = [];
   modalOpenUpdateFollwingMod: boolean = false;
  constructor(private profileService: ProfileService) {}

  ngOnInit():void {

    this.profileService.getUserData().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.subscriptions();
    console.log('usersef',this.user);
  }
  subscriptions():void {
    console.log('subscriptions')
    this.profileService.getFollwingData().subscribe(
      (follwings: Follwing[]) => {
        this.userfollwing = Object.values(follwings);
      },
      (error: any) => {
        console.log(error, "d3q");
      }
    );
    console.log('f',this.userfollwing)
  }

  updateCommentsMod(): void {
    this.modalOpenUpdateFollwingMod = true;
  }
  // updateCommentsMod(): void {
  //   this.modalOpenUpdateCommentsMod = true;
  // }
}




