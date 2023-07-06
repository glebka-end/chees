import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('auth-token') || '';
  }

  getUserData(): Observable<User> {
    const url = 'http://127.0.0.1:80/api/users/users/profile'; // Укажите свой URL для получения данных пользователя
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<User>(url, { headers });
  }

  sendData(formData: any): Observable<any> {
    const url = 'http://127.0.0.1:80/api/users/users/update-profile'; // Укажите свой URL для отправки данных на сервер
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put(url, formData, { headers });
  }
}
