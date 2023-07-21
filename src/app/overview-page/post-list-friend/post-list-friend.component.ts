
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../shared/services/profile.service";
import { Post, Comment } from "../../shared/interfaces";
import {ActivatedRoute} from "@angular/router";

class updateComment {
}

class CreateComment {
}

@Component({
  selector: 'app-post-list-friend',
  templateUrl: './post-list-friend.component.html',
  styleUrls: ['./post-list-friend.component.scss']
})
export class PostListFriendComponent {
  userPosts: Post[] = [];
  userPostsC: Comment[] = [];
  profileId!: number;
  modalOpenUpdateCommentsMod: boolean = false;
  modalOpen: boolean = false;
  newCommentContent: string = '';
  UpdateCommentContent: string = '';

  constructor(private route: ActivatedRoute,private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadPosts();
    // this.loadComments();
  }
  updateCommentsMod(): void {
    this.modalOpenUpdateCommentsMod = true;
  }
  openModal(): void {
    this.modalOpen = true;
  }

  loadPosts(): void {
    this.profileId = +this.route.snapshot.params['id'];
    this.profileService.getPostsFriend(this.profileId).subscribe(
      (posts: Post[]) => {
        this.userPosts =Object.values(posts);
        console.log('userPosts pos-lis-f',this.userPosts);
        // this.loadComments(); // Load comments for each post
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

  deleteComment(postId: string, commentId:string): void {
    console.log(commentId)
    console.log(postId)
    this.profileService.deleteComment(commentId,postId).subscribe(
      () => {
        const index = this.userPosts.findIndex(post => post.id.toString() === postId);
        if (index !== -1) {
          this.userPosts.splice(index, 1);
        }
      },
      (error: any) => {
        alert("что ты творишь не твой коммен) я все знаю пидрила ");
        console.error('Ошибка при удалении поста:', error);
      }
    );
  }
  addComment(postId: string): void {
    const newComment: CreateComment = {
      comment: this.newCommentContent,
      post_id: parseInt(postId),

    };
    console.log(newComment)
    this.profileService.createComment(newComment,postId).subscribe(
      (comment: Comment) => {
        const post = this.userPosts.find(p => p.id.toString() === postId);
        if (post) {
          post.comment.push(comment);
        }
        this.modalOpen = false;
        this.newCommentContent = '';
      },
      (error: any) => {
        console.error('Ошибка при добавлении комментария:', error);
      }
    );
  }

  updateComments(postId: string,commentId:string): void {

    const updateComment: updateComment = {
      comment: this.  UpdateCommentContent,
      post_id: parseInt(postId),
      commentId: parseInt(commentId),
    };
    console.log('updateComment',updateComment)
    this.profileService.updateComments(updateComment,postId,commentId).subscribe(
      (comment: Comment) => {
        const post = this.userPosts.find(p => p.id.toString() === postId);
        if (post) {
          post.comment.push(comment);
        }
        this.modalOpen = false;
        this.newCommentContent = '';
      },
      (error: any) => {
        console.error('Ошибка при  обновлении коммент:', error);
      }
    );
  }
}
