
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from "../../shared/services/profile.service";
import {Follwing, User} from "../../shared/interfaces";
import { Router } from '@angular/router';
import {window} from "rxjs";
@Component({
  selector: 'app-profile-friend',
  templateUrl: './profile-friend.component.html',
  styleUrls: ['./profile-friend.component.scss']
})
export class ProfileFriendComponent implements OnInit {
  profileId!: number;
  userfollwing: Follwing[] = [];
  user: User | null = null;
  modalOpenUpdateFollwingMod: boolean = false;



  constructor(private route: ActivatedRoute, private profileService: ProfileService, private router: Router) { }
  // goToProfile(): void {
  //   this.profileId = +this.route.snapshot.params['id'];
  //   this.router.navigateByUrl('/profilee/$15');
  //
  // }
  ngOnInit(): void {
     this.profileId = +this.route.snapshot.params['id'];
    this.profileService.getProfileById(this.profileId).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.subscriptions();
  }
  subscriptions():void {
    this.profileId = +this.route.snapshot.params['id'];
    console.log('rr',this.profileId)
    this.profileService.getFollwingById(this.profileId).subscribe(
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

  subscribe():void {
    this.profileId = +this.route.snapshot.params['id'];
    console.log('subscribe',this.profileId)
    this.profileService.postSubscribeById(this.profileId).subscribe(
      // (follwings: Follwing[]) => {
      () => {
      //   this.userfollwing = Object.values(follwings);
    console.log('ww');
      },
      (error: any) => {
        console.log(error, "d3q");
      }
    );
    console.log('subscribe',this.userfollwing)
  }
}
