
import {Injectable} from "@angular/core";
import{User} from'../interfaces'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  constructor(private hhtp: HttpClient) {
  }
  login(user: User): Observable<{token:string}> {
 return this.hhtp.post<{token:string}>('/user/login',user)
  }
}
