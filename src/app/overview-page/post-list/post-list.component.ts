
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../shared/services/profile.service";
import { Post , User ,CreatePost } from "../../shared/interfaces";
import { FormsModule } from '@angular/forms';

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
      (error) => {
        console.error('Ошибка при загрузке постов:', error);
      }
    );
  }

  deletePost(postId: number): void {
    this.profileService.deletePost(postId.toString()).subscribe(
      () => {
        const index = this.userPosts.findIndex(post => post.id === postId);
        if (index !== -1) {
          this.userPosts.splice(index, 1);
        }
      },
      error => {
        console.error('Ошибка при удалении поста:', error);
      }
    );
  }

  openModal(): void {
    this.modalOpen = true;
  }

  // createPost(): void {
  //   // Отправить новый пост на сервер
  //
  //   this.profileService.createPost(this.newPost).subscribe(
  //     (response) => {
  //       // Обработать успешный ответ от сервера
  //       console.log('Пост успешно создан:', response);
  //       this.loadPosts(); // Загрузить обновленный список постов
  //       this.closeModal(); // Закрыть модальное окно
  //     },
  //     (error) => {
  //       console.error('Ошибка при создании поста:', error);
  //     }
  //   );
  // }
  //
  // closeModal(): void {
  //   this.modalOpen = false;
  //   this.newPost = { title: '', content: '', image: null }; // Сбросить значения полей формы
  // }
  //
  // handleImageUpload(event: any): void {
  //   const file = event.target.files[0];
  //   this.newPost.image = file;
  // }

}
