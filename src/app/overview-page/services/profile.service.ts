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
  private token =''//
  private a =''

  constructor(private http: HttpClient) {
  }
  //ate (interfrofil: Interfrofil): Observable <interfrofil> {
  //    return this.hhtp.post<interfrofil>('http://127.0.0.1:/api/users/users/update-profile',interfrofil)
  // }
  sendData(data: any) {
    const url = 'http://127.0.0.1:80/api/comment/{commentId}/likes'; // замените на свой URL
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    const options = { headers: headers };
    return this.http.put(url, data);
  }
}
