import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../shared/services/profile.service";
import { Post, Comment } from "../../shared/interfaces";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  userPosts: Post[] = [];
  userPostsC: Comment[] = [];
  modalOpen: boolean = false;
  newCommentContent: string = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadPosts();
    // this.loadComments();
  }

  loadPosts(): void {
    this.profileService.getPosts().subscribe(
      (posts: Post[]) => {
        this.userPosts = posts;
        console.log(this.userPosts);
        console.log(this.userPostsC);
        // this.loadComments(); // Load comments for each post
      },
      (error: any) => {
        console.error('Ошибка при загрузке постов:', error);
      }
    );
  }

  // loadComments(): void {
  //   for (const post of this.userPosts) {
  //     this.profileService.getComments(post.id).subscribe(
  //       (comments: Comment[]) => {
  //         post.comments = comments;
  //       },
  //       (error: any) => {
  //         console.error('Ошибка при загрузке комментариев:', error);
  //       }
  //     );
  //   }
  // }


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
  deleteComment(postId: string, commentId: string): void {
    this.profileService.deleteComment(postId,).subscribe(
      () => {
        const post = this.userPosts.find(p => p.id.toString() === postId);
        if (post) {
          const index = post.comment.findIndex(c => c.id.toString() === commentId);
          if (index !== -1) {
            post.comment.splice(index, 1);
          }
        }
      },
      (error: any) => {
        console.error('Ошибка при удалении комментария:', error);
      }
    );
  }

}
