import {Injectable} from "@angular/core";
//import {User} from '../interfaces'
import {HttpClient, HttpHeaders} from "@angular/common/http";
//import {Interfrofil} from "./interfrofil";
import {User} from "../../shared/interfaces";
import {Observable} from "rxjs";
//import {Observable} from "rxjs";
//import {tap} from "rxjs/operators";

class interfrofil {
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // const token = localStorage.getItem('auth-token');

  private a =''
  private token: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('auth-token') || '';
  }
  //ate (interfrofil: Interfrofil): Observable <interfrofil> {
  //    return this.hhtp.post<interfrofil>('http://127.0.0.1:/api/users/users/update-profile',interfrofil)
  // }
  sendData(data: any) {

    // console.log(this.token)
    const url = 'http://127.0.0.1:80/api/users/users/update-profile'; // замените на свой URL
    const headers = new HttpHeaders().set('Authorization', `auth-token ${this.token}`);
    const options = { headers: headers };
    return this.http.put(url, data);
  }
}
