import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from "../../shared/services/profile.service";
import {Follwing, User, isSubscribed} from "../../shared/interfaces";
import {Router} from '@angular/router';
import {window} from "rxjs";
import {Location} from '@angular/common';

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
  // IsSubscribed: boolean = false;
  IsSubscribed2!: isSubscribed ;

  // IsSubscribed!:boolean;

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private router: Router) {
  }
  navigateToAnotherPage(id: any) {

    this.router.navigate(['/profilee/' + id])
      .then(() => {
        this.router.navigate(['/profilee/' + id])
      });
  }

  goToProfile(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

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
    this.signedOrNot();
    this.subscriptions();
  }

  signedOrNot(): void {
    this.profileId = +this.route.snapshot.params['id'];
    console.log('subscribe', this.profileId)
    this.profileService.signedOrNot(this.profileId).subscribe(
      (respons: isSubscribed) => {
        this.IsSubscribed2 = respons.status;
        console.log('signedOrNot2', this.IsSubscribed2);
      },
      (error: any) => {
        console.log(error, "d3q");
      }
    );
  }

  subscriptions(): void {

    this.profileId = +this.route.snapshot.params['id'];
    console.log('rr', this.profileId)
    this.profileService.getFollwingById(this.profileId).subscribe(
      (follwings: Follwing[]) => {
        this.userfollwing = Object.values(follwings);
      },
      (error: any) => {
        console.log(error, "d3q");
      }
    );
    console.log('f', this.userfollwing)
  }

  updateCommentsMod(): void {
    this.modalOpenUpdateFollwingMod = true;
  }

  subscribe(): void {
    this.profileId = +this.route.snapshot.params['id'];
    console.log('subscribe', this.profileId)
    this.profileService.postSubscribeById(this.profileId).subscribe(
      (respons:any) => {
        console.log('respons',respons);
        this.IsSubscribed2 = respons.status;
      },
      (error: any) => {
        console.log(error, "d3q");
      }
    );
    this.router.navigate([this.router.url])
  }

}
// goToProfile(): void {
//   // this.profileId = +this.route.snapshot.params['id'];
//   this.router.navigateByUrl('/overview/profile');

// reloadCurrentRoute() {
//   let currentUrl = this.router.url;
//   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
//     this.router.navigate([currentUrl]);
//   });
