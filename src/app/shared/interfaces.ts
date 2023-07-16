export interface User {
  status: string;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  is_online: boolean;
  // Другие свойства пользователя
}

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likes_count: number;
  comment: Comment[]; // Добавьте поле для комментариев
}

export interface Comment {
  id: number;
  post_Id: number;
  comment: string;
  name:string;
  //createdAt: string;
  // Другие свойства комментария
}


export interface CreatePost {
  title: string;
  content: string;
  image: any | null;
}

