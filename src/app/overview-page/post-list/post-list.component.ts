import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../shared/services/profile.service";
import { Post} from "../../shared/interfaces";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  userPosts: Post[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.profileService.getPosts().subscribe(
      (posts: Post[]) => {
        this.userPosts = posts;
      },
      (error) => {
        console.error('Ошибка при загрузке постов:', error);
      }
    );
  }
}
