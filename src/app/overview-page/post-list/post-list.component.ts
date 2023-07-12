import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../shared/services/profile.service";
import { Post } from "../../shared/interfaces";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  userPosts: Post[] = [];
  modalOpen: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.profileService.getPosts().subscribe(
      (posts: Post[]) => {
        this.userPosts = posts;
      },
      (error: any) => {
        console.error('Ошибка при загрузке постов:', error);
      }
    );
  }

  likePost(post: Post): void {
    if (!this.isPostLiked(post)) {
      this.profileService.likePost(post.id.toString()).subscribe(
        () => {
          post.likes_count++;
        },
        (error: any) => {
          console.error('Ошибка при лайке поста:', error);
        }
      );
    } else {
      this.profileService.likePost(post.id.toString()).subscribe(
        () => {
          post.likes_count--;
        },
        (error: any) => {
          console.error('Ошибка при удалении лайка с поста:', error);
        }
      );
    }
  }

  isPostLiked(post: Post): boolean {
    return post.likes_count > 0;
  }

  deletePost(postId: string): void {
    this.profileService.deletePost(postId).subscribe(
      () => {
        const index = this.userPosts.findIndex(post => post.id.toString() === postId);
        if (index !== -1) {
          this.userPosts.splice(index, 1);
        }
      },
      (error: any) => {
        console.error('Ошибка при удалении поста:', error);
      }
    );
  }

  openModal(): void {
    this.modalOpen = true;
  }
}
