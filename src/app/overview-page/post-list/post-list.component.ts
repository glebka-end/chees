import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../shared/services/profile.service";
import {Post, Comment} from "../../shared/interfaces";
import {NgForm} from "@angular/forms";


class CreateComment {
}

class updateComment {
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  userPosts: Post[] = [];
  userPostsC: Comment[] = [];
  fileData: any;

  modalOpenUpdateCommentsMod: boolean = false;
  modalOpen: boolean = false;
  newCommentContent: string = '';
  UpdateCommentContent: string = '';

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.loadPosts();
    // this.loadComments();
  }
  fileEvent(e: any) {
    this.fileData = e.target.files[0];
  }

  onSubmitform(f: NgForm) {
    if (f.invalid) return; // Проверка на валидность формы

    const formData = new FormData();
    formData.append('immage', this.fileData);
    formData.append('contente', f.value.contente);
    formData.append('title', f.value.title);

    this.profileService.createPost(formData).subscribe(resp => {
      alert("Uploaded");
      console.log(resp);
    });
  }
  updateCommentsMod(): void {
    this.modalOpenUpdateCommentsMod = true;
  }

  openModal(): void {
    this.modalOpen = true;
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

  deleteComment(postId: string, commentId: string): void {
    console.log(commentId)
    console.log(postId)
    this.profileService.deleteComment(commentId, postId).subscribe(
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
    this.profileService.createComment(newComment, postId).subscribe(
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

  updateComments(postId: string, commentId: string): void {

    const updateComment: updateComment = {
      comment: this.UpdateCommentContent,
      post_id: parseInt(postId),
      commentId: parseInt(commentId),
    };
    console.log('updateComment', updateComment)
    this.profileService.updateComments(updateComment, postId, commentId).subscribe(
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
