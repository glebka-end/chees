import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CreatePost, Post, User, Follwing, PostF} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private token: string;
  private cachedPosts: Post[] = [];


  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('auth-token') || '';

  }

  getComments(postId: number): Observable<Comment[]> {
    const url = `http://127.0.0.1:80/api/posts/${postId}/comments`; // Замените на свой URL для получения комментариев
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Comment[]>(url, {headers});
  }

  addComment(postId: number, content: string): Observable<Comment> {
    const url = `http://127.0.0.1:80/api/users/posts/${postId}/comments`; // Замените на свой URL для добавления комментария
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    const body = {content};
    return this.http.post<Comment>(url, body, {headers});
  }

  likePost(postId: string): Observable<User> {
    const url = `http://127.0.0.1:80/api/users/post/${postId}/likes`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<User>(url, null, {headers});
  }

  getUserData(): Observable<User> {
    const url = 'http://127.0.0.1:80/api/users/users/profile';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<User>(url, {headers});
  }

  deletePost(postId: string): Observable<any> {
    const url = `http://127.0.0.1:80/api/users/post/${postId}`; // Укажите URL для удаления поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete(url, {headers});
  }

  deleteComment(commentId: string, postId: string): Observable<any> {
    const url = `http://127.0.0.1:80/api/posts/${postId}/comments/${commentId}`; // Укажите URL для удаления поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete(url, {headers});
  }

  createComment(newComment: any, post: string): Observable<any> {
    console.log('newComment', newComment)
    const url = `http://127.0.0.1:80/api/users/post/${post}/comments`; // Укажите URL для удаления поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post(url, newComment, {headers});
  }

  updateComments(updateComment: any, postId: string, commentId: string): Observable<any> {
    console.log('updetComment', updateComment)
    const url = `http://127.0.0.1:80/api/posts/${postId}/comments/${commentId}`; // Укажите URL для удаления поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put(url, updateComment, {headers});
  }

  editPost(post: Post): Observable<any> {
    const url = `http://127.0.0.1:80/api/users/post/${post.id}`; // Укажите URL для редактирования поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put(url, post, {headers});
  }

  createPost(post: any,): Observable<any> {
    const url = 'http://127.0.0.1:80/api/users/self-new-post'; // Укажите свой URL для создания поста
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post(url, post, {headers});
  }

  sendData(formData: any): Observable<any> {
    const url = 'http://127.0.0.1:80/api/users/users/update-profile';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put(url, formData, {headers});
  }

  getFollwingData(): Observable<Follwing[]> {
    const url = 'http://127.0.0.1:80/api/users/users/indexFollwing';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ${this.token}');
    return this.http.get<{ data: Follwing[] }>(url, {headers}).pipe(
      map(response => response.data)
    );
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

  getPostsFriend(profileId: number): Observable<PostF[]> {
    if (this.cachedPosts.length > 0) {
      return of(this.cachedPosts);
    } else {
      return this.http.get<Post[]>(
        `http://127.0.0.1:80/api/users/users/show-profile/${profileId}`)
        .pipe(
          tap(posts => {
            this.cachedPosts = posts; // Кэшируем полученные данные
          })
        );
    }
  }

  getProfileById(profileId: number): Observable<User> {
    const url = `http://127.0.0.1:80/api/users/users/show-profile/${profileId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<User>(url, {headers});
  }

  getFollwingById(profileId: any): Observable<Follwing[]> {
    const url = `http://127.0.0.1:80/api/users/users/indexFollwing/${profileId}`;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ${this.token}');
    return this.http.get<{ data: Follwing[] }>(url, {headers}).pipe(
      map(response => response.data)
    );
  }
  postSubscribeById(profileId: any): Observable<any> {
    const url = `http://127.0.0.1:80/api/users/users/store-Follwing/${profileId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post(url, {headers});
  }
}
