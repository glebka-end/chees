import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import {CreatePost, Post, User} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private token: string;
  private cachedPosts: Post[] = []; // Добавляем переменную для кэширования постов


  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('auth-token') || '';

  }

  likePost(postId: string): Observable<User> {
    const url = `http://127.0.0.1:80/api/users/post/${postId}/likes`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<User>(url, null, { headers });
  }

  getUserData(): Observable<User> {
    const url = 'http://127.0.0.1:80/api/users/users/profile';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<User>(url, { headers });
  }
  // getPosts(): Observable<Post[]> {
  //   const url = 'http://127.0.0.1:80/api/user/posts'; // Укажите свой URL для получения постов
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  //   return this.http.get<Post[]>(url, { headers });
  // }

  deletePost(postId: string): Observable<any> {
    const url = `http://127.0.0.1:80/api/users/post/${postId}`; // Укажите URL для удаления поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete(url, { headers });
  }
  editPost(post: Post): Observable<any> {
    const url = `http://127.0.0.1:80/api/users/post/${post.id}`; // Укажите URL для редактирования поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put(url, post, { headers });
  }
  // createPost(data: CreatePost): Observable<any> {
  //   const url = 'http://127.0.0.1:80/api/users/self-new-post'; // Replace with your actual API endpoint
  //   const formData = new formData();
  //   formData.append('title', data.title);
  //   formData.append('content', data.content);
  //   formData.append('image', data.image);
  //
  //   return this.http.post(url, formData);
  // }
  createPost(post: CreatePost, ): Observable<any> {
    const url = 'http://127.0.0.1:80/api/users/self-new-post'; // Укажите свой URL для создания поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post(url, post, { headers });
  }
  sendData(formData: any): Observable<any> {
    const url = 'http://127.0.0.1:80/api/users/users/update-profile';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put(url, formData, { headers });
  }
  getPosts(): Observable<Post[]> {
    if (this.cachedPosts.length > 0) {
      // Если данные уже есть в кэше, возвращаем их из кэша
      return of(this.cachedPosts);
    } else {
      // Если данные отсутствуют в кэше, делаем запрос на сервер
      return this.http.get<Post[]>('http://127.0.0.1:80/api/user/posts').pipe(
        tap(posts => {
          this.cachedPosts = posts; // Кэшируем полученные данные
        })
      );
    }
  }
}
