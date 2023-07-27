import { Component } from '@angular/core';
import {applicationsIndexFollowers, Follwing, isSubscribed, User} from "../../../shared/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../../shared/services/profile.service";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent {
  // applicationsIndexFollowers: applicationsIndexFollowers[] = [];
  userfollwing: Follwing[] = [];
  constructor(private route: ActivatedRoute, private profileService: ProfileService, private router: Router) {}


  ngOnInit(): void {
    this.applicationsFollowers();
  }

  applicationsFollowers(): void {
    console.log('subscriptions')
    this.profileService.getApplicationsIndexFollowers().subscribe(
      (follwings: Follwing[]) => {
        this.userfollwing = Object.values(follwings);
        console.log('aaaaaaaaaaaaaaa');
      },
      (error: any) => {
        console.log(error, "d3q");
      }
    );
    console.log('f', this.userfollwing)
  }
  acceptFriendRequest(profile_Id: number): void {
    this.profileService.acceptFriendRequest(profile_Id).subscribe(
      (response: any) => {
        console.log('Friend request accepted');
        // Обновить список подписок
        this.applicationsFollowers();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  rejectFriendRequest(profile_Id: number): void {
    this.profileService.rejectFriendRequest(profile_Id).subscribe(
      (response: any) => {
        console.log('Friend request rejected');
        // Обновить список подписок
        this.applicationsFollowers();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
