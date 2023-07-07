import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../shared/services/profile.service";
import { User } from "../../shared/interfaces";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: User | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getUserData().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
