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
  id:number;
  title: string ;
  content: string;
  image: string | null;
  likes_count:number;
}



export interface CreatePost {
  title: string ;
  content: string;
  image: any | null;
}

