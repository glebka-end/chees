export interface User {
  status: string;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  is_online: boolean;
  // Другие свойства пользователя
}
export interface Follwing {//подписки
  id: number;
  first_name: string;
  last_name: string;
  // Другие свойства пользователя
}
export interface Post {
  id: number;
  title: string;
  contente: string;
  image: string | null;
  likes_count: number;
  comment: Comment[]; // Добавьте поле для комментариев

}

export interface Comment {
  commentId: number;
  post_id: number;
  user_id: number;
  comment: string;
  name:string;

}
export interface isSubscribed {
  status:any;
}

export interface CreatePost {
  title: string;
  content: string;
  image: any | null;
}

export interface applicationsIndexFollowers {
  id: number;
  first_name: string;
  last_name: string;
}
