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
}



export interface CreatePost {
  title: string ;
  content: string;
  image: File;
}

