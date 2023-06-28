import {Injectable} from "@angular/core";
//import {User} from '../interfaces'
import {HttpClient, HttpHeaders} from "@angular/common/http";
//import {Interfrofil} from "./interfrofil";
import {User} from "../interfaces";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
//import {Observable} from "rxjs";
//import {tap} from "rxjs/operators";

class interfrofil {
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // const token = localStorage.getItem('auth-token');


  private token: string;


  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('auth-token') || '';
    console.log(this.token)

  }

//   sendData(formData: any) {
//
//     console.log(this.token)
//     const url = 'http://127.0.0.1:80/api/users/users/update-profile'; // замените на свой URL
//     const headers = new HttpHeaders().set('Authorization', `Bearer234234 ${this.token}`);
//
//     const options = {headers: headers};
//     return this.http.put(url, formData, options);
//   }
// }

  sendData(formData: any): Observable<any> {
    console.log(this.token)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer34234234 ${this.token}`
    })
    return this.http.post('http://127.0.0.1:80/api/users/self-new-post',null)
  }
}
//
//   sendData(formData: any) {
//     console.log(this.token)
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
//     console.log({headers})
//     return this.http.put('http://127.0.0.1:80/api/users/users/update-profile', {headers},formData );
//
//   }
// }

//  sendData(formData: any): Observable<{ token: string }> {
//     return this.http.put<{ token: string }>('http://127.0.0.1:80/api/users/users/update-profile', formData)
//       .pipe(
//         tap(
//
//         )
//       )
//   }
// }











// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { User } from "../interfaces";
// import { Observable } from "rxjs";
// import { tap } from "rxjs/operators";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   private token: string;
//   private headers: HttpHeaders;
//
//   constructor(private http: HttpClient) {
//     this.token = localStorage.getItem('auth-token') || '';
//     this.headers = (new HttpHeaders()).set('Authorization', `Bearer ${this.token}`);
//     console.log(this.token);
//     console.log(this.headers);
//   }
//
//   sendData(data: any): Observable<any> {
//     const url = 'http://127.0.0.1:80/api/users/users/update-profile'; // Замените на свой URL
//     return this.http.put(url, data, { headers: this.headers });
//   }
// }
